'use strict';

const should = require('should');
const assert = require('assert');

const {TreeSet} = require('../../jstreemap');

const fs = require('fs');
let data = fs.readFileSync('./test/specs/tree-set.spec.js', 'utf8');
eval(data);