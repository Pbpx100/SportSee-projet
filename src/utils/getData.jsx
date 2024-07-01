import getInformation from "./data";
import axios from 'axios';

// getData is a function that need 2 params, type and ID. 
// Depending on the type, we call a different API route
export const getData = async (type, id) => {
    let data = []; // Response from the API call are updated here
    const mock = false;
    const info = new getInformation();
    switch (type) {
        case "USER_ACTIVITY":
            if (mock) {
                data = await info.getUserActivity(id);
            } else {
                data = await axios.get(`http://localhost:3000/user/${id}/activity`)
                    .then(function (response) {
                        // handle success
                        return response.data;
                    })
                    .catch(function (error) {
                        return error.response;
                    })
            }
            break;
        case "USER_PERFORMANCE":
            if (mock) {
                data = await info.getUserPerformance(id);
            } else {
                data = await axios.get(`http://localhost:3000/user/${id}/performance`)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        return error.response;
                    })
            }
            break;
        case "USER_AVERAGE_SESSIONS":
            if (mock) {
                data = await info.getUserAverageSessions(id);
                console.log(data.data)
            } else {
                data = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) {
                        return error.response;
                    })
            }
            break;
        case "USER_MAIN_DATA":
            if (mock) {
                data = await info.getUserInfos(id);
            } else {
                //este es el primero en ejecutarse
                data = await axios.get(`http://localhost:3000/user/${id}`)
                    .then(function (response) {
                        // handle success
                        return response.data;
                    })
                    .catch(function (error) {
                        return error;
                    })
            }
            break;
        default: data = []
    }
    return data;
};
