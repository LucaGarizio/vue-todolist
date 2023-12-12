const { createApp } = Vue

createApp({
  data() {
    return {
      error: false,
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
        },
        {
          text: 'Pulire la casa',
          done: false
        },
        {
          text: 'Leggere un libro',
          done: true
        },
        {
          text: 'Fare una passeggiata',
          done: false
        }
      ]
    };
  },
  methods: {
    addTask(){
      // se la nuova task ha almeno 5 caratteri
      if(this.newTask.length >= 5){
      // crea e carica il nuovo oggetto nell'array con valore della proprietà done impostato su falso
      this.todos.unshift({
      text: this.newTask,
      done: false,
      }),
      this.error = false;
      this.newTask = ""
    } else {
    // altrimenti setta la variabile errore su vero
    this.error = true
  }
    },
    remove(i) {
      this.todos.splice(i, 1);
    },
    reverse(i){
        this.todos[i].done = !this.todos[i].done;
      }
  }
}).mount('#app')