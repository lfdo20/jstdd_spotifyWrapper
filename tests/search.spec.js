import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbum, searchArtist, searchTracks, searchPlaylists } from '../src/search';

chai.use(sinonChai);
sinonStubPromise(sinon);

// global.fetch = require('node-fetch');

// Generic search with more than one type
// Search for Albums
// Search for Artists
// search for tracks
// search for Playlists

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist search in the method', () => {
      expect(search).to.exist;
    });

    it('should exist searchAlbum in the method', () => {
      expect(searchAlbum).to.exist;
    });

    it('should exist searchArtist in the method', () => {
      expect(searchArtist).to.exist;
    });

    it('should exist searchTracks in the method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist searchPlaylists in the method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('generic search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.be.calledOnce;
    });


    it('should call the correct url', () => {
      context('passing one type', () => {
        const artists = search('incubus', 'artist');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist');

        const albums = search('incubus', 'album');
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=incubus&type=album');
      });
      context('passing more than one type', () => {
        const artistAndAlbums = search('incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist');
      });
    });

    it('should return the JSON data from the promise', () => {
      promise.resolves({ body: 'json' });
      const artists = search('incubus', 'artist');

      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('artist search', () => {
    it('should call fetch function', () => {
      const artist = searchArtist('incubus');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const artist = searchArtist('incubus');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist');

      const artist2 = searchArtist('muse');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=muse&type=artist');
    });
  });

  describe('albums search', () => {
    it('should call fetch function', () => {
      const albums = searchAlbum('forest');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const albums = searchAlbum('forest');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=forest&type=albums');

      const albums2 = searchAlbum('solar');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=solar&type=albums');
    });
  });

  describe('tracks search', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('windcrusher');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const tracks = searchTracks('windcrusher');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=windcrusher&type=tracks');

      const tracks2 = searchTracks('oily');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=oily&type=tracks');
    });
  });

  describe('playlist search', () => {
    it('should call fetch function', () => {
      const playlist = searchPlaylists('Sobriety');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const playlist = searchPlaylists('Sobriety');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=Sobriety&type=playlist');

      const playlist2 = searchPlaylists('ramdaram');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=ramdaram&type=playlist');
    });
  });
});
