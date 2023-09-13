import Header from './Header'
import '../styles/components/Hero-Section.sass'

function Hero_Section(){
    return(
        <div className='Hero_Section'>
            <div className='Hero_Section__bg'>
                <img src='imgs/background_image.png' alt='img' className='Hero_Section__bg__Img'/>
                <div className='Hero_Section__bg__Dark'/>
                <div className='Hero_Section__bg__Dark--mix'/>
            </div>
            <Header/>
            <div className="Hero">
                <h1 className="Hero__Title">Imagine, crie, <br/> implemente e <span className="Hero__Title--Italic">evolua</span></h1>
                <p className="Hero__Subtitle">Porque não basta resolver apenas os conflitos do mundo do direito.</p>
                <a href='#Cases'><button className='Hero__button'>INICIE A SUA JORNADA</button></a>
            </div>
        </div>
    )
}

export default Hero_Section