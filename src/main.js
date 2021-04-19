import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/layout/TheHeader.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseText from './components/ui/BaseText.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router);

app.component('TheHeader', TheHeader);
app.component('BaseButton', BaseButton);
app.component('BaseText', BaseText);

app.mount('#app');