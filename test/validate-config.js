// Ref: https://github.com/feross/eslint-config-standard/tree/master/test
var test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  var CLIEngine = require('eslint').CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'esnext.js'
  })

  t.ok(cli.executeOnText('var foo\n'))
  t.end()
})