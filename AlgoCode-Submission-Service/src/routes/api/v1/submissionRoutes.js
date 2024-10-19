const { createSubmission } = require("../../../controllers/submissionController");

async function submissionRoutes(fastify, options) {
    fastify.post('/', createSubmission);
    console.log('submissionRoutes registered'); // Log for debugging
}

module.exports = submissionRoutes;