import '../../styles/components/Video.sass'

function Video(){
    return(
        <div className="Video_Section">
            <div className="Video_Text_Space">
                <h1 className="Video__Title">Quem são, o que fazem, onde vivem?</h1>
                <p className='Video__Text'>Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS, 
                    pode ser qualquer outro vídeo da sua escolha, mas queremos dar play.
                     Na estrutura de pastas nos chamamos as páginas de containers.</p>
            </div>
            <iframe className='Video' src='https://www.youtube.com/embed/bc0KhhjJP98' frameBorder="0" allowFullScreen/>
        </div>
    )
}

export default Video