import ApiClient from '../_api';
// eslint-disable-next-line no-unused-vars
import { RESET_BASE_STATE, UPDATE_CITIES } from './mutations';

export const fetchCities = 'fetchCities';
export const resetBaseState = 'resetBaseState';

const apiClient = new ApiClient();

export default {
  // eslint-disable-next-line no-unused-vars
  async [fetchCities](context) {
    try {
      const data = await apiClient.fetchCities();

      context.commit(UPDATE_CITIES, data);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  [resetBaseState](context) {
    context.commit(RESET_BASE_STATE);
  }
};
