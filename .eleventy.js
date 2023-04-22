const postcss = require("postcss");
const postcssImport = require("postcss-import");
const yaml = require("js-yaml");
const esbuild = require("esbuild");

module.exports = function (eleventyConfig) {
  const rootStyle = "./src/styles/index.css";

  eleventyConfig.addDataExtension("yml", (contents) => {
    return yaml.load(contents);
  });

  eleventyConfig.addCollection("directions", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/directions/*/index.njk");
  });

  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async (content, path) => {
      if (path !== rootStyle) {
        return () => undefined;
      }

      return async () => {
        let output = await postcss([postcssImport]).process(content, {
          from: path,
        });

        return output.css;
      };
    },
  });

  [
    "src/robots.txt",
    "src/img",
    "src/fonts",
    "src/directions/**/*.!(yml|njk)",
  ].forEach((path) => eleventyConfig.addPassthroughCopy(path));

  eleventyConfig.addTemplateFormats("js");

  eleventyConfig.addFilter("spaned", function (value) {
    return value
      .trim()
      .split(" ")
      .map((i) => `<span>${i}</span>`)
      .join(" ");
  });

  eleventyConfig.addExtension("js", {
    outputFileExtension: "js",
    compile: async (_, path) => {
      if (path !== "./src/scripts/index.js") {
        return () => {};
      }

      return async () => {
        let output = await esbuild.build({
          target: "es2020",
          entryPoints: [path],
          minify: true,
          bundle: true,
          write: false,
        });

        return output.outputFiles[0].text;
      };
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk"],
  };
};
