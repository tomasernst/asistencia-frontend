import client from "./client";
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export async function getLobatos() {
    try {
        const URL = "" // Change URL depending on what's needed.
        const response = await client.get(URL); 
        return response.data;
    } catch (error) {
        console.log(error)
        return undefined
    }
};