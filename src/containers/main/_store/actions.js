// eslint-disable-next-line no-unused-vars
import ApiClient from '../_api';
import { RESET_BASE_STATE } from './mutations';

export const resetBaseState = 'resetBaseState';

export default {
  [resetBaseState](context) {
    context.commit(RESET_BASE_STATE);
  }
};
