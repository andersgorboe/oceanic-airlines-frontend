import axios from 'axios';

export default class BaseApiClient {
  constructor() {
    const baseUrl = process.env.VUE_APP_API_HOST;

    this.axiosInstance = axios.create({
      baseURL: baseUrl
    });
  }

  async post(queryParams, payload) {
    try {
      const response = await this.axiosInstance.post(`/${queryParams}`, payload);

      if (response.status === 200 || response.status === 201) {
        return Promise.resolve();
      }

      return Promise.reject();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get(queryParams) {
    try {
      const response = await this.axiosInstance.get(`/${queryParams}`);
      const data = response.data;

      if (response.status !== 200) {
        return Promise.reject(data);
      }

      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
