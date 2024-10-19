async function v1Plugin(fastify, options) {
    fastify.get('/test', async (request, reply) => {
        return { message: 'Test route is working!' };
    });
    fastify.register(require('./submissionRoutes'), {prefix: '/submissions'});
    console.log('v1Routes registered'); // Log for debugging
}

module.exports = v1Plugin

