const axiosInstance = require('../config/axiosInstance');
const { PROBLEM_ADMIN_SERVICE_URL } = require('../config/serverConfig');

const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

async function fetchProblemDetails(problemId) {  // fetches details of a specific problem from the problem admin service
    try {
        const uri = PROBLEM_ADMIN_API_URL + `/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        console.log("Api response: ", response.data);
        return response.data;

    } catch(error) {
        console.log("Something went wrong while fetching problem details");
        console.log(error);
    }
}

module.exports = {
    fetchProblemDetails
}

/**The fetchProblemDetails function fetches details of a specific problem from a remote Problem Admin Service by 
 * making a GET request to the corresponding API endpoint.
 *  It constructs the API URL dynamically using the problemId provided as 
 * an argument, sends the request using a pre-configured Axios instance, and handles any errors that might occur.  */