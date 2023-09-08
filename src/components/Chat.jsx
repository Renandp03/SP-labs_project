import { useState } from 'react'
import '../styles/components/Chat.sass'

function Chat(){

    const [open,setOpen] = useState(false)
    const [expanded,setExpanded] = useState(false)

    function openChat(){
        setExpanded(false)
        setOpen(!open)
    }

    function expandChat(){
        setExpanded(!expanded)
    }

    return(
        <>
            <div className={open ? 'Open_Chat_button--Open' : 'Open_Chat_button'} onClick={openChat}/>
            <div className={open ? 'Chat' : 'Chat--closed'}>
                <div className='Chat__Top'>
                    <img src='/imgs/Chat_Avatar.svg' alt='avatar img' className='Chat__Top__Avatar'/>
                    {expanded ? 
                    <button className='Chat__Top__Button' onClick={expandChat}>Recolher <img src='/icons/Retract_Button_Icon.svg'/></button> : 
                    <button className='Chat__Top__Button' onClick={expandChat}>Expandir <img src='/icons/Expand_Button_Icon.svg'/></button>}
                    
                </div>
                <h1 className='Chat__Tittle'>🖖 Como posso ajudar?</h1>
                <div className={expanded ? 'Chat__Timeline' : 'Chat__Timeline--Small'}>
                    <h2 className='Chat__Timeline__Text'>Role para cima para ver o histórico</h2>
                </div>
                <div className='Chat__Send_Bar'>
                    <input className='Chat__Send_Bar_Input' placeholder='Digite sua dúvida'/>
                    <button className='Chat__Send_Bar__Button'>
                        <img className='Chat__Send_Bar__Button__Icon' src='icons/Send_Button_Icon.svg' alt='Send_Button_Icon'/>
                    </button>
                </div>
                

            </div>
        </>
    )
}

export default Chat