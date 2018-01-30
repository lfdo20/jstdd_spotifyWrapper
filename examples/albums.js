import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQB_MYulPlgXUUR8-q0zqwEUUSpIEuKv9dX0PhJ746kdt6E0SQW9lFv-uSqTLC18JnCc0kEkb8EzzHlgUvKE_RmPUpxGbrw6oa4QCilpTwl3gTZNdYifhvpJ-7ov1p-CkZSTlatIeJWLNAE_BFs',
});

const albums = spotify.search.album('incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));

//  data.albums.items.map(item => console.log(item.name))
