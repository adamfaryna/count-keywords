// https://github.com/retextjs/retext-keywords

var vfile = require('to-vfile');
var retext = require('retext');
var keywords = require('retext-keywords');
var nlcstToString = require('nlcst-to-string');

retext()
  .use(keywords)
  .process(vfile.readSync('example.txt'), function (err, file) {
    if (err) throw err;

    console.log('Keywords:');
    file.data.keywords.forEach(function (keyword) {
      var matches = keyword.matches;
      console.log(nlcstToString(matches[0].node) + ": " + matches.length);
    });

    console.log();
    console.log('Key-phrases:');
    file.data.keyphrases.forEach(function (phrase) {
      var matches = phrase.matches;
      console.log(matches[0].nodes.map(nlcstToString).join('') + ": " + matches.length);
    });
  }
);
