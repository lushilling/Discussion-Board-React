import axios from "axios";

export async function handler(event, context) {

    try {

        const response = await axios.get("https://dog.ceo/api/breeds/image/random", { headers: { Accept: "application/json" } })
        const data = response.data

        const picture = await axios.get(data.message, { headers: { Accept: "application/json" } })
        const data2 = picture.data2

        return {
            statusCode: 200,
            body: JSON.stringify({ msg: data2.img })
        }

    } catch (err) {

        console.log(err) // output to netlify function log

        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        }

    }
}