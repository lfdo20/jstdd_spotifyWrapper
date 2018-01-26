import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/albums';

/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Album', () => {
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
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('shoul have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should have the correct url', () => {
      const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmR');

      const album2 = getAlbum('2i6nd4FV6y7K9fln6eelmT');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmT');
    });


    it('should return the correct data from JSON promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('2i6nd4FV6y7K9fln6eelmR');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    // verifica se o fetch ocorre
    // verifica se  o url é correto
    // verifica se a resposta é recebida
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should have the correct url', () => {
      const albums = getAlbums('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=2i6nd4FV6y7K9fln6eelmR');

      const albums2 = getAlbums(['2i6nd4FV6y7K9fln6eelmT', '2i6nd4FV6y7K9fln6eelmR']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=2i6nd4FV6y7K9fln6eelmT,2i6nd4FV6y7K9fln6eelmR');
    });

    it('should return the correct data from JSON promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbums(['2i6nd4FV6y7K9fln6eelmR', '2i6nd4FV6y7K9fln6eelmT']);
      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const albumTrk = getAlbumTracks();
      expect(fetchedStub).to.be.calledOnce;
    });

    it('should have the correct url', () => {
      const albumTrk = getAlbumTracks('2i6nd4FV6y7K9fln6eelmR');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmR/tracks');

      const albumTrk2 = getAlbumTracks('2i6nd4FV6y7K9fln6eelmT');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/2i6nd4FV6y7K9fln6eelmT/tracks');
    });


    it('should return the correct data from JSON promise', () => {
      promise.resolves({ album: 'name' });
      const albumTrk = getAlbumTracks('2i6nd4FV6y7K9fln6eelmR');
      expect(albumTrk.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});

