// import ApiClient from '../_api';
// eslint-disable-next-line no-unused-vars
import { RESET_BASE_STATE, UPDATE_PROJECTS } from './mutations';

export const fetchProjects = 'fetchProjects';
export const resetBaseState = 'resetBaseState';

// const apiClient = new ApiClient();

export default {
  // eslint-disable-next-line no-unused-vars
  async [fetchProjects](context) {
    try {
      // const data = await apiClient.fetchProjects();
      const data = [
        {"id":1,"title":"Activity 1","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":false},
        {"id":2,"title":"Activity 2","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":true}
      ]
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
