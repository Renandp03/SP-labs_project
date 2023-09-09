import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/components/Chat.sass'

function Chat(){

    const [open,setOpen] = useState(false)
    const [expanded,setExpanded] = useState(false)
    const [question,setQuestion] = useState('')
    const [messages,setMessages] = useState([])

    function openChat(){
        setExpanded(false)
        setOpen(!open)
    }

    function expandChat(){
        setExpanded(!expanded)
    }

    function formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
      }

    function sendQuestion(e){
        e.preventDefault()
        const URL = import.meta.env.VITE_URL
        const newUserMessage = {author:'user',message:question, date:formatDate(new Date())}
        const body = {question}
        if(!body.question) {console.log('Pergunta aí, menó'); return null}
        setMessages([...messages, newUserMessage])
        setQuestion('')

        axios.post(`${URL}/chat`,body)
        .then((res) => {
            const newChatMessage = {author:'chat', message:res.data, date:formatDate(new Date())}
            const updatedMessages = [...messages, newUserMessage, newChatMessage ]
            setMessages(updatedMessages)
            setQuestion('')
        })
        .catch((err) => console.log(err.name))
    }

    useEffect(() => {console.log(messages)},[messages])

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

                    { messages.length > 0 ? 

                        messages.map((m) => {

                            {
                                m.author == 'user' ? <div className='Chat__Timeline__Message_Space'>
                                    //fazer a parte do user message
                                </div> : 
                                m.author=='chat' ? <div className='Chat__Timeline__Message_Space'>
                                    //fazer a parte do chat message
                                </div> : 
                                <></>
                            }
                        }) :
                        <h2 className='Chat__Timeline__Text'>Role para cima <img src='icons/Arrow_Turn_Up.svg'/>para ver o histórico</h2>
                    }
                </div>
                <div className='Chat__Send_Bar'>
                    <input className='Chat__Send_Bar_Input' placeholder='Digite sua dúvida' value={question} onChange={e => setQuestion(e.target.value)}/>
                    <button className='Chat__Send_Bar__Button' onClick={sendQuestion}>
                        <img className='Chat__Send_Bar__Button__Icon' src='icons/Send_Button_Icon.svg' alt='Send_Button_Icon'/>
                    </button>
                </div>
                

            </div>
        </>
    )
}

export default Chat