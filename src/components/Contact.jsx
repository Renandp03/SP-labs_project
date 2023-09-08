import '../styles/components/Contact.sass'

function Contact(){
    return(
        <div className="Contact" id='Contact'>
            <div className='Contact__Decorator'/>
            <h1 className="Contact__Tittle">Não fique parado, fale conosco</h1>
            <div className='Contact__Form'>
                <input className='Contact__Input' placeholder='Seu nome' type='text'/>
                <input className='Contact__Input' placeholder='Seu email' type='email'/>

                    <select className='Contact__Select'>
                        <option value="option_0">Seu Segmento</option>
                        <option value="option_1">Opção 1</option>
                        <option value="option_2">Opção 2</option>
                        <img src='icons/Expand_More.svg' alt='expand_more' className='Contact__Select_Icon'/>
                    </select>



                <textarea className='Contact__Input--Big' placeholder='Fale um pouco sobre o seu negócio' cols="25" rows="5"></textarea>
               
                    <div className='Contact__Checklist'>
                        <input type='checkbox' id='Contact__Checkbox'/>
                        <label className='Contact__Checklist__text'>Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs</label>
                    </div>
                <button type='submit' className='Contact__Button'>enviar</button>
            </div>
        </div>
    )
}

export default Contact