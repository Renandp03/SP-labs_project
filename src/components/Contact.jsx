import '../styles/components/Contact.sass'

function Contact(){
    return(
        <div className="Contact">
            <h1 className="Contact__Tittle">Não fique parado, fale conosco</h1>
            <div className='Contact__Form'>
                <input className='Contact__Input' placeholder='Seu nome' type='text'/>
                <input className='Contact__Input' placeholder='Seu email' type='email'/>
                <input className='Contact__Input' placeholder='Seu segmento' type='email'/>
                <textarea className='Contact__Input--Big' placeholder='Fale um pouco sobre o seu negócio' cols="25" rows="5"></textarea>
                <div className='Contact__Checklist'>
                    <input type='checkbox' id='my_checkbox'/>
                    <label>Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs</label>
                </div>
                <button type='submit' className='Contact__Button'>enviar</button>
            </div>
        </div>
    )
}

export default Contact