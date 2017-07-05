#!/usr/bin/env node

var linter = 'semistandard-prettier-eslint';

require('prettier-eslint-cli/dist/add-exception-handler'); // want to do this first
var path = require('path');
var getLogger = require('loglevel-colored-level-prefix');
var parser = require('prettier-eslint-cli/dist/parser').default;
var formatFiles = require('prettier-eslint-cli/dist/format-files').default;

var logger = getLogger({ prefix: 'prettier-semi-cli' });
var args = process.argv.slice(2);

logger.trace('Parsing args: ', args);

args.push('--eslint-path=' + path.dirname(require.resolve(linter)));
var argv = parser.parse(args);

formatFiles(argv);
