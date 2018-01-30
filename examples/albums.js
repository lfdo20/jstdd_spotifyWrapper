import SpotifyWrapper from '../src/index';

global.fetch = require ('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQBEGyt8HkSTzdqRVs170WgUwnLl0INf4MUH_Bm_lno_D2BwH-fE-6iDb4MI6ttrea4JAH0dN5ETr2LOHDey5RvN79zw2y5XhlrchGNax_bDG0CpBGFy89ZVjSiwULy1DJfX83acxzKUMtwvQ_I'
})

const albums = spotify.search.Album('incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
