// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("alert-form", function() {
    return '<section class="cta"> <h3>Be the first to know.</h3> <form action="#"> <input type="text" placeholder="Enter your email address to recieve updates"> <input type="button" value="Keep in touch"> </form> </section>'
  });
};