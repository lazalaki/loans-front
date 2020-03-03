const state = {
    isLoading: false,
}

const getters = {
    IS_LOADING: state => {
        return state.isLoading;
    }
}

const mutations = {
    START_LOADING: (state) => {
        state.isLoading = true;
    },
    STOP_LOADING: (state) => {
        state.isLoading = false;
    }
}

const actions = {
    START_SPINNER_ACTION: (context) => {
        context.commit('START_LOADING')
    },
    STOP_SPINNER_ACTION: (context) => {
        context.commit('STOP_LOADING')
    }
}

export default {
    state, getters, mutations, actions
}