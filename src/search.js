export default function search() {
  return {
    search: (query, type) => this.request(`${this.apiURL}search?q=${query}&type=${type}`),
    Album: query => this.search.search(query, 'album'),
    Artist: query => this.search.search(query, 'artist'),
    Tracks: query => this.search.search(query, 'tracks'),
    Playlists: query => this.search.search(query, 'playlist'),
  };
}
