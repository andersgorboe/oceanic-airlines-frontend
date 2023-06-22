import BaseApiClient from '@/_api/baseapiclient';

export default class ApiClient extends BaseApiClient {
  constructor() {
    super();
  }

  async fetchProjects() {
    return this.get('api/v1/Activities');
  }
}
