'use strict';

var _search = require('./search');

var _albums = require('./albums');

module.exports = {
  getAlbum: _albums.getAlbum,
  getAlbums: _albums.getAlbums,
  getAlbumTracks: _albums.getAlbumTracks,
  search: _search.search,
  searchAlbum: _search.searchAlbum,
  searchArtist: _search.searchArtist,
  searchPlaylists: _search.searchPlaylists
};