import axios from 'axios';
const KEY = 'AIzaSyCFcDdMzIzCvEhS5vZFQcSL3-aLW1JcJ7o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
