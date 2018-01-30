/* eslint no-unused-expressions: 0 */
/* eslint no-unused-vars: 0 */

export default function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}albums/${id}`),
    getAlbums: ids => this.request(`${this.apiURL}albums/?ids=${ids}`),
    getTracks: id => this.request(`${this.apiURL}albums/${id}/tracks`),
  };
}
