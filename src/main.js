import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)

app.use(router)
app.use(store)
// app.use(Vuetify)

app.config.errorHandler = (err) => {
  console.log('err..', err);
}

app.mount('#app')
