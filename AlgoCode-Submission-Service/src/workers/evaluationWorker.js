const { Worker } = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');

function evaluationWorker(queue) { // function defined to set up a worker that processes jobs from 'EvaluationQueue' 
    new Worker('EvaluationQueue', async job => {   //A new Worker instance is created that listens to the EvaluationQueue.
        if (job.name === 'EvaluationJob') {

            try {
                const response = await axios.post('http://localhost:3002/sendPayload', {
                    userId: job.data.userId,
                    payload: job.data
                })
                console.log(response);
              console.log(job.data);
            } catch(error) {
                console.log(error)
            }
        }
    }, {
        connection: redisConnection
    });
}

module.exports = evaluationWorker;