import './styles/Form.sass'

function Form(props){

    const {
        name,
        setName,
        email,
        setEmail,
        segment,
        setSegment,
        description,
        setDescription,
        accepted,
        setAccepted,
        sendContact
    } = props

    return(
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
      
    )
}

export default Form