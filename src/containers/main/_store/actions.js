// import ApiClient from '../_api';
// eslint-disable-next-line no-unused-vars
import { RESET_BASE_STATE, UPDATE_BOOKINGS } from './mutations';

export const fetchOrders = 'fetchOrders';
export const resetBaseState = 'resetBaseState';
export const updateBookings = 'updateBookings';

// const apiClient = new ApiClient();

export default {
  // eslint-disable-next-line no-unused-vars
  async [fetchOrders](context) {
    try {
      // const data = await apiClient.fetchProjects();
      // context.commit(UPDATE_ORDERS, data);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  [updateBookings](context, data) {
    context.commit(UPDATE_BOOKINGS, data)
  },

  [resetBaseState](context) {
    context.commit(RESET_BASE_STATE);
  }
};
