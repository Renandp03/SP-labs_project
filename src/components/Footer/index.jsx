import './styles/Footer.sass'

function Footer(){
    return(
        <div className="Footer_Section">
            <div className='Footer'>
            <img className='Footer__Logo' src='imgs/SP_labs_dark.svg' alt='logo'/>
                <div className='Footer__Credits'>
                    <div className='Footer__Credits__Column'>
                        <h2 className='Footer__Credits__Column__Title'>SP Labs</h2>
                        <div><a href="/" className='Footer__Credits__Column__Link'>Política de privacidade</a></div>
                    </div>
                    <div className='Footer__Credits__Column'>
                        <h2 className='Footer__Credits__Column__Title'>Sem Processo</h2>
                        <div><a href="/" className='Footer__Credits__Column__Link'>Site</a></div>
                        <div><a href="/" className='Footer__Credits__Column__Link'>Produtos</a></div>
                        <div><a href="/" className='Footer__Credits__Column__Link'>Blog</a></div>
                    </div>
                </div>
            </div>
            <div className='Footer_Section__Line'/>
            <p className='Footer_Section__Signature'>SP Labs 2023. Feito por Renan Damascena</p>
        </div>
    )
}

export default Footer