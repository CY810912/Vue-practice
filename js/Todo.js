var app = new Vue({
    el: '#app',
    data: {
        newTodo:'',
        todos: [
            {
                id: '1',
                title: 'hello',
                completed: false
            }
        ],
        visibility: 'all',
        cacheTodo: {},
        cacheTitle: ''
    },
    methods: {
        addTodo: function(){
            var value = this.newTodo.trim()
            var timestamp = Math.floor(Date.now())
            if ( !value ) { return }
            this.todos.push(
                {
                    id: timestamp,
                    title: value,
                    computed: false
                }
            ),
            this.newTodo = ''
        },
        removeTodo: function(todo){
            var newIndex = this.todos.findIndex(function(item){
                return todo.id === item.id
            })
            this.todos.splice(newIndex,1)
          },
        editTodo: function(item){
            this.cacheTodo = item
            this.cacheTitle = item.title
        },
        cancelEdit: function(){
            this.cacheTodo = {}
        },
        doneEdit: function(item){
            item.title = this.cacheTitle
            this.cacheTitle = ''
            this.cacheTodo = {}
        },
        cleanTodo: function(todo){
            allTodo = this.todos
            allTodo.splice(0,allTodo.length)
          },
    },
    computed: {
        filteredTodos: function(){
            var nowTab = this.visibility
            var showList = []
            switch (nowTab) {
                case 'all':
                    showList = this.todos
                    break
                case 'active':
                    this.todos.forEach(function(item){
                        if ( !item.completed ) { showList.push(item) }
                    })
                    break
                case 'completed':
                    this.todos.forEach(function(item){
                        if ( item.completed ) { showList.push(item) }
                    })
            }
            return showList
        },
        activeTodosLength: function(){
            return this.todos.filter(item=> !item.completed ).length
            // var sum = 0
            // this.todos.forEach(function(item){
            //     if ( !item.completed ) { sum ++ }
            // })
            // return sum
        }
    }
})
