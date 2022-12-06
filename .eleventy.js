const postcss = require("postcss");
const postcssImport = require("postcss-import");

module.exports = function (eleventyConfig) {
  const rootStyle = "./src/styles/index.css";

  eleventyConfig.addDataExtension("yml", (contents) => {
    return yaml.load(contents);
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

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
};
