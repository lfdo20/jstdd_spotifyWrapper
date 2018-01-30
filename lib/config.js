'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1/';
var TOKEN_API = 't1';
var headers = exports.headers = {
  headers: {
    Authorization: '\'Bearer ' + TOKEN_API + '\''
  }
};

exports.default = API_URL;