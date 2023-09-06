import '../styles/components/Chat.sass'

function Chat(){
    return(
        <>
            <div className="Open_Chat_button"/>
            <div className='Chat'>
                <div className='Chat__Top'>
                    <img src='/imgs/Chat_Avatar.svg' alt='avatar img' className='Chat__Top__Avatar'/>
                    <button className='Chat__Top__Button'>Expandir <img src='/icons/Expand_Chat.svg'/></button>
                </div>
                <h1 className='Chat__Tittle'>🖖 Como posso ajudar?</h1>
                <div className='Chat__Timeline--Small'>
                </div>
                <div className='Chat__Send_Bar'>
                    <input className='Chat__Send_Bar_Input' placeholder='Digite sua dúvida'/>
                    <button className='Chat__Send_Bar__Button'></button>
                </div>
                

            </div>
        </>
    )
}

export default Chat