var routes = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply.reactview('index');
        }
    },

    {
        method: 'GET',
        path: '/information',
        handler: function(request, reply) {
            reply.reactview('information');
        }
    },

    {
        method: 'GET',
        path: '/help',
        handler: function(request, reply) {
            reply.reactview('help');
        }
    }
];

module.exports = routes;
