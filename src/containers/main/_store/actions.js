import ApiClient from '../_api';
// eslint-disable-next-line no-unused-vars
import { RESET_BASE_STATE, UPDATE_PROJECTS } from './mutations';

export const fetchProjects = 'fetchProjects';
export const resetBaseState = 'resetBaseState';

const apiClient = new ApiClient();

export default {
  // eslint-disable-next-line no-unused-vars
  async [fetchProjects](context) {
    try {
      const data = await apiClient.fetchProjects();

      context.commit(UPDATE_PROJECTS, data);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  [resetBaseState](context) {
    context.commit(RESET_BASE_STATE);
  }
};
