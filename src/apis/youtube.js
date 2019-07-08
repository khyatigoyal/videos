import axios from 'axios';
const KEY = 'AIzaSyB4b89DRS_G2qrX9hw-_LW6vyRbJ8_RYOE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxresults : 5,
        key : KEY
    }
}
)