import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader.vue'
import BaseButton from './components/BaseButton.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router);

app.component('TheHeader', TheHeader);
app.component('BaseButton', BaseButton);

app.mount('#app');