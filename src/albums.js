import { searchAlbum } from '../src/search';
import { API_URL } from './config';
import { toJSON } from './utils';

global.fetch = require('node-fetch');

export const getAlbum = id =>
  fetch(`${API_URL}albums/${id}`).then(toJSON);

export const getAlbums = ids =>
  fetch(`${API_URL}albums/?ids=${ids}`).then(toJSON);

export const getAlbumTracks = id =>
  fetch(`${API_URL}albums/${id}/tracks`).then(toJSON);


const albums = searchAlbum('incubus');

// albums.then(data => console.log(data));
// data.albums.itens.map(item => console.log(item.name)));
