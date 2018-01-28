/* global fetch */

import { API_URL } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
  fetch(`${API_URL}search?q=${query}&type=${type}`)
    .then(toJSON);

export const searchAlbum = query =>
  search(query, 'albums');

export const searchArtist = query =>
  search(query, 'artist');

export const searchTracks = query =>
  search(query, 'tracks');

export const searchPlaylists = query =>
  search(query, 'playlist');
