import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';

/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Album', () => {
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
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('shoul have getAlbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should have the correct url', () => {
      const album = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmR');

      const album2 = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmT');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmT');
    });


    it('should return the correct data from JSON promise', () => {
      promise.resolves({ album: 'name' });
      const album = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmR');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    // verifica se o fetch ocorre
    // verifica se  o url é correto
    // verifica se a resposta é recebida
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should have the correct url', () => {
      const albums = spotify.album.getAlbums('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=2i6nd4FV6y7K9fln6eelmR');

      const albums2 = spotify.album.getAlbums(['2i6nd4FV6y7K9fln6eelmT', '2i6nd4FV6y7K9fln6eelmR']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=2i6nd4FV6y7K9fln6eelmT,2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the correct data from JSON promise', () => {
      promise.resolves({ album: 'name' });
      const albums = spotify.album.getAlbums(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmT']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const albumTrk = spotify.album.getTracks();
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should have the correct url', () => {
      const albumTrk = spotify.album.getTracks('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmR/tracks');

      const albumTrk2 = spotify.album.getTracks('2i6nd4FV6y7K9fln6eelmT');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmT/tracks');
    });


    it('should return the correct data from JSON promise', () => {
      promise.resolves({ album: 'name' });
      const albumTrk = spotify.album.getTracks('2i6nd4FV6y7K9fln6eelmR');
      expect(albumTrk.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});

