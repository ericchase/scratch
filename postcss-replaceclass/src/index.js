module.exports = (opts = {}) => {
  // Work with options here
  console.log('hello');

  return {
    postcssPlugin: 'postcss-replaceclass',
    /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  };
};
module.exports.postcss = true;

export default module.exports;
