import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 897584fda1e68b13df73f7df2319bd8148203181d222e920cc0328bab7d1288e'
    }
});