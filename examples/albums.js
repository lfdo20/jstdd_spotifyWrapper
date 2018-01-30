import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQCOImTIjbOlFPx-EY4E7cR6YBLIXs_aEtMaj7O35vP_YzTK9wG3YhfMSi3BnAsThP3oGYMWvzOyIpzEG9W6aTuKpojjtd9VXKIaWHV-aAuD9haz-I6QAdb11FfKfBRQS_Rf6MD3-9zYDnyanRI',
});

const albums = spotify.search.Album('incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
