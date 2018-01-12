import Vue from 'vue'
import Dev from './dev.vue'

new Vue({
    el: '#app',
    render: h => h(Dev)
})