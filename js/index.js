var vm = new Vue({
    el: "#app",
    data:{
        title: "Eudora - Vue.js",
        text: "hello Vue.js",
        time: new Date().toLocaleString(),
        object:{
            name: 'Eudora',
            year: '27'
        }
    }
})
