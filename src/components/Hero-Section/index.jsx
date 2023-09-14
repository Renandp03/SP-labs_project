import Header from './Header'
import Hero from './Hero'
import './styles/Hero-Section.sass'

function Hero_Section(){
    return(
        <div className='Hero_Section'>
            <div className='Hero_Section__bg'>
                <img src='imgs/background_image.png' alt='img' className='Hero_Section__bg__Img'/>
                <div className='Hero_Section__bg__Dark'/>
                <div className='Hero_Section__bg__Dark--mix'/>
            </div>
            <Header/>
            <Hero/>
        </div>
    )
}

export default Hero_Section