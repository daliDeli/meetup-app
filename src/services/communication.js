import axios from 'axios';
import { EVENTS_URL } from '../constants';

export const getEvents = () => {
    return axios({
        method: 'GET',
        url: EVENTS_URL,
        crossDomain: true,
        header: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            "content-type": "application/json",
            "sign": "true",
        } 
    })
    
}