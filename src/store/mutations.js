import {
  USER_RECORDS,
  EDIT_USER_RECORDS
} from './mutation-types.js'

export default {
  [USER_RECORDS] (state, payload) {
    state.user_records = payload
  },
  [EDIT_USER_RECORDS](state,payload){
    state.user_records = payload
  }

}
