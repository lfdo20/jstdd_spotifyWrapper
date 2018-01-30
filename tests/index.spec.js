import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import API_URL from '../src/config';

import SpotifyWrapper from '../src/index';


/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */
global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'testedecoisa',
    });
    expect(spotify.apiURL).to.be.equal('testedecoisa');
  });

  it('should use default url if none is provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1/');
  });

  it('should receive  a token option', () => {
    const spotify = new SpotifyWrapper({
      token: 'testedecoisa',
    });
    expect(spotify.token).to.be.equal('testedecoisa');
  });
});

describe('request method', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });
  it('should have a method called request', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.request).to.exist;
  });
  it('should call fetch on request method', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });
    spotify.request('url');
    expect(fetchedStub).to.have.been.calledOnce;
  });

  it('should call fetch with correct URL', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });
    spotify.request('url');
    expect(fetchedStub).to.have.been.calledWith('url');
  });

  it('should call fetch with headers', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    const headers = {
      headers: {
        Authorization: `'Bearer foo'`,
      },
    };

    spotify.request('url');
    expect(fetchedStub).to.have.been.calledWith('url', headers);
  });
});
