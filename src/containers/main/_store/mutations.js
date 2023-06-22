import { getBaseState } from './basestate';

export const RESET_BASE_STATE = 'RESET_BASE_STATE';

export default {
  [RESET_BASE_STATE](state) {
    Object.assign(state, getBaseState());
  }
};
