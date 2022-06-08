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

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/car">Car</RouterLink>
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


    
      header h3 {
        margin-left: 8px;
      }
      header .cart {
        background: rgb(82, 82, 194);
        padding: 8px;
        color: white;
        border: none;
        height: 100%;
        cursor: pointer;
        outline: none;
      }
      header .cart-content {
        position: absolute;
        right: 0;
        top: 40px;
        background: white;
        padding: 16px;
        color: black;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 14px;
      }
      header .cart-content .cart-content__product {
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 8px;
        background: rgb(129, 129, 129, 0.2);
        margin-bottom: 4px;
      }
      header .cart-content .cart-content__product.bg-gray {
        background: rgb(129, 129, 129, 0.4);
      }
      header .cart-content .cart-content__product img {
        width: 50px;
      }
      main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 16px;
      }

      main .product {
        display: grid;
        grid-template-columns: 0.2fr 0.8fr;
      }

      main .product .product__thumbnails {
        width: 90px;
      }
      main .product .product__thumbnails .thumb {
        width: 100%;
        height: 90px;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 8px;
      }
      main .product .product__thumbnails .thumb.active {
        border-bottom: 1px solid rgb(82, 82, 194);
      }

      main .description h4 {
        display: inline-block;
        font-size: 24px;
      }
      main .description .description__status {
        font-size: 16px;
        font-weight: lighter;
        color: rgb(129, 129, 129);
      }
      main .description .description__price {
        font-weight: bold;
        color: rgb(104, 104, 209);
      }
      main .description .description__content {
        margin-top: 8px;
      }
      main .description .discount {
        margin: 8px 0 8px 0;
      }
      main .description .discount span {
        font-size: 14px;
        margin-right: 8px;
      }
      main .description .discount input {
        padding: 8px;
        border: 1px solid #616161;
        border-radius: 4px;
      }
      main .description button {
        padding: 8px;
        font-size: 18px;
        background: rgb(104, 104, 209);
        color: #fefefe;
        border: none;
        border-radius: 8px;
      }
      main .description button:disabled {
        background: rgb(159, 159, 228);
      }
      .badge {
        font-size: 14px;
        font-weight: normal;
        padding: 8px;
        border-radius: 8px;
        color: white;
        margin-right: 4px;
        vertical-align: text-top;
      }
      .badge.new {
        background-color: rgb(103, 172, 13);
      }
      .badge.offer {
        background-color: rgb(197, 107, 33);
      }
</style>
