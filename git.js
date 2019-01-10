const express = require('express');
var bodyParser = require('body-parser');
const request= require('request');
const https = require('https');
require('dotenv').config()

function Git() {
  this.access_token = process.env.ACCESS_TOKEN,
  this.base_url = process.env.BASE_URL
}

Git.prototype.getFileNames = function (mergeCommitSha, repo) {
  request(this.base_url + repo + '/commits/' + mergeCommitSha + '?access_token=' + this.access_token, {json: true}, (err, resp, body) => {
      eval(pry.it);
      console.log(body.files);
      return body.files
    }
  )
}

module.exports = Git;