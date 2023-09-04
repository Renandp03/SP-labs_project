import '../styles/components/Contact.sass'

function Contact(){
    return(
        <div className="Contact">
            <h1 className="Contact__Tittle">Não fique parado, fale conosco</h1>
            <div className='Contact__Form'>
                <input className='Contact__Input' placeholder='Seu nome'/>
            </div>
        </div>
    )
}

export default Contact