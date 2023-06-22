import BaseApiClient from '@/_api/baseapiclient';

export default class ApiClient extends BaseApiClient {
  constructor() {
    super();
  }

  async fetchCities() {
    return this.get('api/Routes/Locations');
  }
}
