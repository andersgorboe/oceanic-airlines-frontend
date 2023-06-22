import { getBaseState } from './basestate';

export const RESET_BASE_STATE = 'RESET_BASE_STATE';
export const UPDATE_BOOKINGS = 'UPDATE_BOOKINGS';

export default {
  [UPDATE_BOOKINGS](state, data) {
    state.bookings.push(data)
  },
  [RESET_BASE_STATE](state) {
    Object.assign(state, getBaseState());
  }
};
