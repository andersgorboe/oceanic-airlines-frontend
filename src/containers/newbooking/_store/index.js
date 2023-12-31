import { getBaseState } from './basestate';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: getBaseState,
  actions,
  getters,
  mutations
};
