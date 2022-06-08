<script setup>
import Task from '@/components/Task.vue'
</script>


<script>
export default {
  data() {
    return {
      count: 0,
      isActive: false,
      array: ['this', 'is', 'an', 'example', 'of', 'loop'],
      newTask: ''
    }
  },
  methods: {
    increment() {
      this.isActive = !this.isActive;
      this.count++
    },
    getData() {
    return this.array;
    },
    addTask(){
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  },
  mounted() {
    // this.increment()
  }
}
</script>

<template>
  <div class="home">
    <h1>This is home</h1>
    
    <hr/>

    <div>
      <button :class="{'par': isActive == false, 'impar': isActive == true}" @click="increment">Count: {{ count }}</button>
    </div>
  
    <hr/>

    <ul>
      <li v-for="item in array">{{ item }}</li>
    </ul>

    <hr/>

    <h1>TO DO LIST</h1>
    <p>Create a list of tasks:</p>

    <div class="create-new">
      <input type="text" v-model="newTask" placeholder="Add a new task" @keypress.enter="addTask" />
      <button @click="addTask">ADD</button>
    </div>
  

    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks"
      :key="i"
      :task="task" />
    </div>

  </div>
</template>
