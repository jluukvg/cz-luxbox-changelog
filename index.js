"format cjs";

var engine = require('./engine');
var luxboxCommitTypes = require('./luxbox-commit-types.json');
var conventionalCommitTypes = require('conventional-commit-types');

module.exports = engine({
  types: luxboxCommitTypes.types
});
