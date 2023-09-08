import '../styles/components/Footer.sass'

function Footer(){
    return(
        <div className="Footer_Section">
            <div className='Footer'>
                <h1 className='Footer__Logo'>SP labs_</h1>
                <div className='Footer__Credits'>
                    <div className='Footer__Credits__Column'>
                        <h2 className='Footer__Credits__Column__Title'>SP Labs</h2>
                        <a href="/" className='Footer__Credits__Column__Links'>Política de privacidade</a>
                    </div>
                    <div className='Footer__Credits__Column'>
                        <h2 className='Footer__Credits__Column__Title'>Sem Processo</h2>
                        <div><a href="/" className='Footer__Credits__Column__Links'>Site</a></div>
                        <div><a href="/" className='Footer__Credits__Column__Links'>Produtos</a></div>
                        <div><a href="/" className='Footer__Credits__Column__Links'>Blog</a></div>
                        
                        
                        
                    </div>
                </div>
            </div>
            <div className='Footer_Section__Line'/>
            <p className='Footer_Section__Signature'>SP Labs 2023. Feito por Renan Damascena</p>
        </div>
    )
}

export default Footer