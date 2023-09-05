import '../styles/components/Cases.sass'

function Cases(){
    return(
        <div className='Cases'>
            <div className='Cases__Tittle_Space'>
                <h1 className='Cases__Tittle_Space__Tittle'>Problemas complexos.<br/> Soluções <span className='Cases__Tittle_Space_Tittle--line-through'>complexas</span> criativas_</h1>
                <p className='Case__Tittle_Space__Subtitle'>Confira nossos cases de sucesso que vão além do mundo juridico.</p>
            </div>
            <div className='Case'>
                <h2 className='Case__Tittle'>Solução 1</h2>
                <p className='Case__text'>Repita comigo: Não vou esquecer de prestar atenção se está tudo alinhadinho. Não vou esquecer de prestar atenção se está tudo alinhado. Não vou esquecer de prestar atenção. Não esqueça do chat, ele está pouco visível na imagem acima mas no protótipo fica melhor.</p>
                <button className='Case__Button'>Saiba mais<img className='Button__Icon' src='icons/arrow-right.svg'/></button>
            </div>
            <div className='Case'>
                <h2 className='Case__Tittle'>Solução 2</h2>
                <p className='Case__text'>A harmonia vem do equilibrio, o equilibrio vem da simetria, a simetria vem do alinhamento e o alinhamento é porque eles são detalhistas. A hero-section tem 100vh de altura.</p>
                <button className='Case__Button'>Saiba mais<img className='Button__Icon' src='icons/arrow-right.svg'/></button>
            </div>
            <div className='Case'>
                <h2 className='Case__Tittle'>Solução 3</h2>
                <p className='Case__text'>A gente não queria usar lorem ipsum no texto das soluções então resolvemos deixar umas dicas aqui no meio. Fique atento, la vai uma: Use a metodologia BEM pra nomear as classes.</p>
                <button className='Case__Button'>Saiba mais<img className='Button__Icon' src='icons/arrow-right.svg'/></button>
            </div>
            <div className='Case'>
                <h2 className='Case__Tittle'>Solução 4</h2>
                <p className='Case__text'>Para fazer essa ”lista” de soluções você pode usar tanto display flex quanto display grid, fica a sua escolha. Ah, o select de segmento do form de contato é personalizado. Só não esqueça da dica da Solução 2.</p>
                <button className='Case__Button'>Saiba mais<img className='Button__Icon' src='icons/arrow-right.svg'/></button>
            </div>
            <div className='Case'>
                <h2 className='Case__Tittle'>Solução 5</h2>
                <p className='Case__text'>Mudamos de ideia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, #sqn não falamos na call mas todas as nossas classes tem o nome em inglês ;) sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <button className='Case__Button'>Saiba mais<img className='Button__Icon' src='icons/arrow-right.svg'/></button>
            </div>
            
           
        </div>
    )
}

export default Cases