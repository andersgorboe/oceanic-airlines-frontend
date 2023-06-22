import { getBaseState } from './basestate';

export const RESET_BASE_STATE = 'RESET_BASE_STATE';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';

export default {
  [UPDATE_PROJECTS](state, projects) {
    state.projects = projects;
  },
  [RESET_BASE_STATE](state) {
    Object.assign(state, getBaseState());
  }
};
