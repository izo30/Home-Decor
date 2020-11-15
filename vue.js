var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        register: function() {
            $('#loginModal').modal('hide');
            $('#registerModal').modal('show');
        }
    }
})