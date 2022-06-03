<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Task from '@/components/Task.vue'
</script>

<script>
export default {
  data() {
    return {
      count: 0,
      isActive: false,
      array: ['this', 'is', 'an', 'example', 'of', 'loop'],
      newTask: '',
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

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
 
  <RouterView />


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

</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.par{
  background-color: red;
}

.impar{
  background-color: blue;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: flow-root;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
