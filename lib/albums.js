'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _search = require('../src/search');

var _config = require('./config');

var _utils = require('./utils');

// global.fetch = require('node-fetch');


var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + 'albums/' + id).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + 'albums/?ids=' + ids).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + 'albums/' + id + '/tracks').then(_utils.toJSON);
};

var albums = (0, _search.searchAlbum)('incubus');

albums.then(function (data) {
  return console.log(data);
});
// data.albums.itens.map(item => console.log(item.name)));