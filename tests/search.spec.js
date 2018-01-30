import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
// import { search, searchAlbum, searchArtist, searchTracks, searchPlaylists } from '../src/search';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */

// Generic search with more than one type
// Search for Albums
// Search for Artists
// search for tracks
// search for Playlists

global.fetch = require('node-fetch');

describe('Search', () => {
  let spotify;
  let fetchedStub;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist spotify.search.search in the method', () => {
      expect(spotify.search.search).to.exist;
    });

    it('should exist spotify.search.Album in the method', () => {
      expect(spotify.search.album).to.exist;
    });

    it('should exist spotify.search.Artist in the method', () => {
      expect(spotify.search.artist).to.exist;
    });

    it('should exist spotify.search.Tracks in the method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist spotify.search.Playlists in the method', () => {
      expect(spotify.search.playlist).to.exist;
    });
  });

  describe('artist search', () => {
    it('should call fetch function', () => {
      const artist = spotify.search.artist('incubus');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const artist = spotify.search.artist('incubus');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist');

      const artist2 = spotify.search.artist('muse');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=muse&type=artist');
    });
  });

  describe('albums search', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.album('forest');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const albums = spotify.search.album('forest');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=forest&type=album');

      const albums2 = spotify.search.album('solar');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=solar&type=album');
    });
  });

  describe('tracks search', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('windcrusher');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const tracks = spotify.search.tracks('windcrusher');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=windcrusher&type=tracks');

      const tracks2 = spotify.search.tracks('oily');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=oily&type=tracks');
    });
  });

  describe('playlist search', () => {
    it('should call fetch function', () => {
      const playlist = spotify.search.playlist('Sobriety');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const playlist = spotify.search.playlist('Sobriety');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=Sobriety&type=playlist');

      const playlist2 = spotify.search.playlist('ramdaram');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=ramdaram&type=playlist');
    });
  });
});
