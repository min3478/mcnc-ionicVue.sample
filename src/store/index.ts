import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: '',       // 사용자 ID
    passFlag: false,  // 전달 성공 완료 여부 (true : 성공 / false : 실패)
    login: false,     // 로그인 여부 (true : 로그인 / false : 미로그인)
  },
  getters: {
    // 사용자 ID 반환
    getUserId(state) {
      return state.userId;
    },

    // 전달 요청 성공 여부 반환
    getPassFlag(state) {
      return state.passFlag;
    },

    // 로그인 여부 반환
    isLogin(state) {
      return state.login;
    }
  },
  mutations: {
    // 사용자 ID 저장
    SET_USER_ID(state, payload) {
      return state.userId = payload;
    },

    // 전달 요청 성공 여부 저장
    SET_PASS_FLAG(state) {
      return state.passFlag = !state.passFlag;
    },

    // 로그인 여부 저장
    SET_LOGIN(state) {
      return state.login = true;
    }
  },
  actions: {
    // 사용자 ID 저장
    setUserId(context, id) {
      context.commit('SET_USER_ID', id);
    },

    // 전달 요청 성공 여부 저장
    setPassFlag(context) {
      context.commit('SET_PASS_FLAG');
    },

    // 로그인 여부 저장
    setLogin(context) {
      context.commit('SET_LOGIN');
    }
  },
  modules: {
  }
})
