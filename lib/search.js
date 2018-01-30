'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function search() {
  var _this = this;

  return {
    search: function search(query, type) {
      return _this.request(_this.apiURL + 'search?q=' + query + '&type=' + type);
    },
    Album: function Album(query) {
      return _this.search.search(query, 'album');
    },
    Artist: function Artist(query) {
      return _this.search.search(query, 'artist');
    },
    Tracks: function Tracks(query) {
      return _this.search.search(query, 'tracks');
    },
    Playlists: function Playlists(query) {
      return _this.search.search(query, 'playlist');
    }
  };
}