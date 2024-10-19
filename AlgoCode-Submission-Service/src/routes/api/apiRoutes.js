async function apiPlugin(fastify, options) {
    fastify.register(require('./v1/v1Routes'), {prefix: '/v1'});
    console.log('apiPlugin registered'); // Log for debugging
}

module.exports = apiPlugin