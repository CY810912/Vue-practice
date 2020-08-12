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
        ]
    },
    methods: {
        addTodo: function(){
            var value = this.newTodo
            var timestamp = Math.floor(Date.now())
            if ( !value ) {
                return
            }
            this.todos.push(
                {
                    id: timestamp,
                    title: value,
                    computed: false
                }
            ),
            this.newTodo = ''
        },
        removeTodo: function(){

        },
        editTodo: function(){

        },
        cancelEdit: function(){

        },
        doneEdit: function(){

        },
    },
    computed: {
        filteredTodos: function(){

        }
    }
})