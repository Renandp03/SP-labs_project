import Header from './Header'
import '../styles/components/Hero-Section.sass'

function Hero_Section(){
    return(
        <div className='Hero_Section'>
            <div className='Hero_Background'/>
            <div className='Hero_Dark_Background'/>
            <Header/>
            <div className="Hero">
                <h1 className="Hero__Tittle">Imagine, crie, implemente e <span className="Hero__Tittle--Italic">evolua</span></h1>
                <p className="Hero__Subtittle">Porque não basta resolver apenas os conflitos do mundo do direito.</p>
                <button className='Hero__button'>INICIE A SUA JORNADA</button>
            </div>
        </div>
    )
}

export default Hero_Section