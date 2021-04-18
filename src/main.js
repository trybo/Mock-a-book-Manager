import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader.vue'
import BaseButton from './components/BaseButton.vue'
import BaseText from './components/BaseText.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue3-chart-v2'

// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(router);

app.component('TheHeader', TheHeader);
app.component('BaseButton', BaseButton);
app.component('BaseText', BaseText);

app.mount('#app');