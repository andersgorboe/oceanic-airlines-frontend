import { getBaseState } from './basestate';

export const RESET_BASE_STATE = 'RESET_BASE_STATE';
export const UPDATE_CITIES = 'UPDATE_CITIES';

export default {
  [UPDATE_CITIES](state, cities) {
    state.cities = cities;
  },
  [RESET_BASE_STATE](state) {
    Object.assign(state, getBaseState());
  }
};
