import '../../styles/components/Header.sass'

function Header(){
    return(
        <div className='Header'>
            <img className='Header__logo' src='imgs/SP_labs_light.svg' alt='logo'/>
            <div className='Header__menu'>
                <a className='Menu__Link' href='#Cases'>Cases</a>
                <a className='Menu__Link' href='#Contact'>Contato</a>
            </div>
        </div> 
    )
}

export default Header