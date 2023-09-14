import Form from './Form'
import { useState } from 'react'
import spServices from '../../service/SP_API'

import './styles/Contact.sass'

function Contact(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [segment, setSegment] = useState('option_0')
    const [description,setDescription] = useState('')
    const [accepted,setAccepted] = useState(false)
    const [message, setMessage] = useState()

    async function sendContact(e){
        e.preventDefault()
        const body = {name,email,segment,description}

        try {
            const res = await spServices.sendContact(body,accepted)
            setMessage(res)
            setName('')
            setEmail('')
            setSegment('')
            setDescription('')
            setAccepted(false)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div className="Contact" id='Contact'>
        {message && 
            <div className='Contact__Dark_Background'>
                <div className='Contact__Dark_Background__Message'>
                    <img className='Contact__Dark_Background__Message__Icon' src='icons/Exit_Icon.svg' alt='exit' onClick={() => setMessage('')}/>
                    <p className='Contact__Dark_Background__Message__Text'>
                        {message}
                    </p>
                </div>
            </div>
        }
            <div className='Contact__Decorator'/>
            <h1 className="Contact__Title">Não fique parado, fale conosco</h1>
            <Form
            name={name} setName={setName}
            email={email} setEmail={setEmail}
            segment={segment} setSegment={setSegment}
            description={description} setDescription={setDescription}
            accepted={accepted} setAccepted={setAccepted}
            sendContact={sendContact}/>
            </div>
        
    )
}

export default Contact