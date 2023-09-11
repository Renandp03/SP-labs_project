import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/components/Chat.sass'

function Chat(){

    const [open,setOpen] = useState(false)
    const [expanded,setExpanded] = useState(false)
    const [question,setQuestion] = useState('')
    const [messages,setMessages] = useState([])
    const [newMessageInfo,setNewMessageInfo] = useState('')

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

    function createMessage(author,message){
        const newMessage = {author, message, date:formatDate(new Date())}
        setNewMessageInfo(newMessage)
    }

    async function addMessage(newMessage){
        if(newMessage == '') return null
        const messagesCopy = [...messages]
        const existingDate = messagesCopy.find((n) => n.date === newMessage.date)
        if(existingDate){
            existingDate.messages.push({author: newMessage.author,message:newMessage.message})
        }
        else{
            messagesCopy.push({date:newMessage.date,messages:[{author:newMessage.author,message:newMessage.message}]})
        }
        setMessages(messagesCopy)
    }

    async function getAnswer(userQuestion){
        const URL = import.meta.env.VITE_URL
        const body = {question:userQuestion}
        setQuestion('')
        if(!body.question) {console.log('Pergunta aí, menó'); return null}

        try {
            createMessage('user',userQuestion)
            const res = await axios.post(`${URL}/chat`,body)
            const chatMessage = res.data
            createMessage('chat',chatMessage)
        } catch (err) {
            console.log(err.name)
        }
    }

    useEffect(() => {addMessage(newMessageInfo)},[newMessageInfo])

    return(
        <>
            <div className={open ? 'Open_Chat_button--Open' : 'Open_Chat_button'} onClick={openChat}/>
            <div className={open ? 'Chat' : 'Chat--closed'}>
                <div className='Chat__Top'>
                    <img src='/imgs/Chat_Avatar.svg' alt='avatar img' className='Chat__Top__Avatar'/>
                    
                    <button className='Chat__Top__Button' onClick={expandChat}>
                        {
                            expanded ? 
                            <>Recolher <img src='/icons/Retract_Button_Icon.svg'/></> :
                            <>Expandir <img src='/icons/Expand_Button_Icon.svg'/></>
                        }
                     </button> 
                    
                </div>
                <h1 className='Chat__Tittle'>🖖 Como posso ajudar?</h1>

                <div className={expanded ? 'Chat__Timeline' : 'Chat__Timeline--Small'}>

                    { messages.length > 0 ? 
                        messages.map((d) =>
                        <div className='Chat__Timeline__Date'>
                            <p className='Chat__Timeline__Date__Message'>{d.date}</p>
                            {d.messages.map((m) => 
                                <div className={m.author == 'user' ? 'Chat__Timeline__Message_Space--User_Message' : 'Chat__Timeline__Message_Space--Chat_message'}>
                                    {m.author == 'chat' && <img src="imgs/Chat_Avatar.svg" alt="Chat_Avatar"/>}
                                    <p className='Chat__Timeline__Message_Space__Text'>
                                        {m.message}
                                    </p>
                                </div>
                            )}
                            
                        </div> 
                        )
                         :
                        <h2 className='Chat__Timeline__Text'>Role para cima <img src='icons/Arrow_Turn_Up.svg'/>para ver o histórico</h2>
                    }
                </div>
                <div className='Chat__Send_Bar'>
                    <input className='Chat__Send_Bar_Input' placeholder='Digite sua dúvida' value={question} onChange={e => setQuestion(e.target.value)}/>
                    <button className='Chat__Send_Bar__Button' onClick={async() => {await getAnswer(question)}}>
                        <img className='Chat__Send_Bar__Button__Icon' src='icons/Send_Button_Icon.svg' alt='Send_Button_Icon'/>
                    </button>
                </div>
                

            </div>
        </>
    )
}

export default Chat