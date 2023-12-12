const { createApp } = Vue

createApp({
  data() {
    return {
      newTask: "",
      todos: [
        {
            text: 'Fare i compiti',
            done: false
        },
        {
            text: 'Fare la spesa',
            done: true
        },
        {
            text: 'Fare il bucato',
            done: false
        }
      ]
    };
  },
  methods: {
    addTask(){
      this.todos.unshift({
        text: this.newTask,
        done: false
    })
    },
    remove(i) {
      this.todos.splice(i, 1);
    }
  }
}).mount('#app')