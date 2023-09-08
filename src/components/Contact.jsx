import { useState } from 'react'
import axios from 'axios'

import '../styles/components/Contact.sass'

function Contact(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [segment, setSegment] = useState('option_0')
    const [description,setDescription] = useState('')
    const [accepted,setAccepted] = useState(false)
    const [message, setMessage] = useState('')

    function sendContact(e){
        e.preventDefault()
        const URL = import.meta.env.VITE_URL
        const body = {name,email,segment,description}
        if(!body.name) {console.log('Coloca o nome, menó'); return null}
        if(!accepted) {console.log(`aceita os termos, ${body.name}`); return null}
        axios.post(`${URL}/contact`,body)
        .then((res) => {setMessage(res.data);console.log(res.data)})
        .catch((err) => console.log(err.name))
    }


    return(
        <div className="Contact" id='Contact'>
            <div className='Contact__Decorator'/>
            <h1 className="Contact__Title">Não fique parado, fale conosco</h1>
            <div className='Contact__Form'>
                <input className='Contact__Input' placeholder='Seu nome' type='text' value={name} onChange={e => setName(e.target.value)}/>
                <input className='Contact__Input' placeholder='Seu email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                    <select className='Contact__Select' value={segment} onChange={(e) => setSegment(e.target.value)}>
                        <option value="option_0">Seu Segmento</option>
                        <option value="option_1">Opção 1</option>
                        <option value="option_2">Opção 2</option>
                        <img src='icons/Expand_More.svg' alt='expand_more' className='Contact__Select_Icon'/>
                    </select>



                <textarea 
                    className='Contact__Input--Big' 
                    placeholder='Fale um pouco sobre o seu negócio' 
                    cols="25" rows="5" 
                    value={description} onChange={e => setDescription(e.target.value)}/>
               
                    <div className='Contact__Checklist'>
                        <input type='checkbox' id='Contact__Checkbox' checked={accepted} onChange={() => setAccepted(!accepted)}/>
                        <label className='Contact__Checklist__text'>Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs</label>
                    </div>
                <button type='submit' className='Contact__Button' onClick={sendContact}>enviar</button>
            </div>
        </div>
    )
}

export default Contact