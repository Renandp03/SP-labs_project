import axios from "axios"

const URL = import.meta.env.VITE_URL

async function SendContact(userInfo,confirmation){
    const body = userInfo
    if(!userInfo.name || !confirmation) return null
    
    try {
        const res = await axios.post(`${URL}/chat`,body)
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

const spServices = {getChatAnswer,SendContact}
export default spServices