var myMiddlewareFunction = function (req, res, next) {
    console.log('I am a logger; hear me roar!')
    next()
  }

module.exports = myMiddlewareFunction;
