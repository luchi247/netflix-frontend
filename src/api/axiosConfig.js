import axios from 'axios';

export default axios.create({
    baseURL:'http://54.174.249.112:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
