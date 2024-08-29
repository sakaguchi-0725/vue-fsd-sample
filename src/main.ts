import { createApp } from 'vue'
import { App } from './app'
import router from './app/routes'

const app = createApp(App)

app.use(router)

app.mount('#app')
