import axios from 'axios';

const KEY = 'AIzaSyDVDaBzrunPqnvYCGHORP_CA95xJUuY2c8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});