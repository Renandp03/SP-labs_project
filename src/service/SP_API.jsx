import axios from "axios"

const URL = import.meta.env.VITE_URL

async function getCases(){
    try {
        const res = await axios.get(`${URL}/cases`)
        return res.data.cases
    } catch (err) {
        console.log(err)
    }
}

async function sendContact(userInfo,confirmation){
    const body = userInfo
    if(!userInfo.name || !confirmation) return null
    
    try {
        const res = await axios.post(`${URL}/contact`,body)
        return res.data

    } catch (err) {
        throw new Error(err)
    }
}

async function getChatAnswer(userQuestion){
    if(!userQuestion) return null
    const body = {question:userQuestion}

    try {
        const res = await axios.post(`${URL}/chat`,body)
        return res.data

    } catch (err) {
        throw new Error(err)
    }
}

const spServices = {getCases,sendContact,getChatAnswer}
export default spServices