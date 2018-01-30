export default function search() {
  return {
    search: (query, type) => this.request(`${this.apiURL}search?q=${query}&type=${type}`),
    album: query => this.search.search(query, 'album'),
    artist: query => this.search.search(query, 'artist'),
    tracks: query => this.search.search(query, 'tracks'),
    playlist: query => this.search.search(query, 'playlist'),
  };
}
