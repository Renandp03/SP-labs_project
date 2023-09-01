import '../styles/components/Header.sass'

function Header(){
    return(
        <div className='Header'>
            <h1 className='Header__logo'>SP labs_</h1>
            <div className='Header__menu'>
                <a>cases</a>
                <a>contato</a>
            </div>
        </div>
    )
}

export default Header