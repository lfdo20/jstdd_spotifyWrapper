'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _search = require('../src/search');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config2.default + 'albums/' + id).then(_utils.toJSON);
}; /* global fetch */
/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config2.default + 'albums/?ids=' + ids).then(_utils.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config2.default + 'albums/' + id + '/tracks').then(_utils.toJSON);
};