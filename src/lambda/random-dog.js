import axios from "axios";

export async function handler(event, context) {

    try {

        const response = await axios.get("https://dog.ceo/api/breeds/image/random", { headers: { Accept: "application/json" } })
        const data = response.data
        console.log(response)
        console.log(data)
        console.log(data.message)
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: data.message })
        }

    } catch (err) {

        console.log(err) // output to netlify function log

        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        }

    }
}