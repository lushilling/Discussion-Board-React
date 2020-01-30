import axios from "axios";

export async function handler(event, context) {

    try {

        const response = await axios.get("https://dog.ceo/api/breeds/image/random", { headers: { Accept: "application/json" } })
        const data = response.data

        const imageBase64 = await axios.get(data.message, {responseType: 'arraybuffer'})
        .then(response => Buffer.from(response.data, 'binary').toString('base64'));

        return {
            statusCode: 200,
            body: imageBase64
        }

    } catch (err) {

        console.log(err) // output to netlify function log

        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        }

    }
}