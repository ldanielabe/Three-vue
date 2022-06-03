import { createStore } from 'vuex'

const store = createStore({
  state: { tasks: [] },
  mutations: {
    ADD_TASK(state, task) {
        state.tasks = [{ content: task, done: false }, ...state.tasks];
        //state.tasks.push({ content: task, done: false })
        //state.tasks.unshift({ content: task, done: false })
    },

    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1);
    },

    TOGGLE_TASK(state, task) {
        task.done = !task.done;
    }
  }
})

export default store
