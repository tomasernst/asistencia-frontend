import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const client = axios.create({
    baseURL: SERVER_URL,
});

export default client;