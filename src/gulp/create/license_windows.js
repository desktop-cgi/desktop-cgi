#!/usr/bin/env node

/**
 * 
 * Package: 
 * Author: Desktop-CGI, Ganesh B
 * Email: desktopcgi@gmail.com
 * Description: Nodejs 
 * Install: 
 * Github: https://github.com/
 * npmjs Link: 
 * File: index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { series, parallel, watch, src, dest, lastRun, dest, symlink, registry, task } = require('gulp');

function build(cb) {
  // body omitted
  cb();
}

task(build);
