import '../styles/components/Navbar.sass'

function Navbar(){
    return(
        <div className='Navbar'>
            <h1>SP labs_</h1>
            <div className='Navbar__menu'>
                <a>cases</a>
                <a>contato</a>
            </div>
        </div>
    )
}

export default Navbar