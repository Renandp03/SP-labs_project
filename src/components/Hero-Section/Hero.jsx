import './styles/Hero.sass'

function Hero(){
    return(
            <div className="Hero">
                <h1 className="Hero__Title">Imagine, <span className='Hero__Title__Wrap'>crie,</span> <br/> implemente e <span className="Hero__Title--Italic">evolua</span></h1>
                <p className="Hero__Subtitle">Porque não basta resolver apenas os conflitos do mundo do direito.</p>
                <a href='#Cases'><button className='Hero__button'>INICIE A SUA JORNADA</button></a>
            </div>
    )
}

export default Hero