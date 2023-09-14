import Message from './Message'
import ChatTop from './Chat_Top'
import spServices from '../../service/SP_API'
import { useState, useEffect, useRef } from 'react'
import '../../styles/components/Chat/Chat.sass'

function Chat(){

    const [open,setOpen] = useState(false)
    const [expanded,setExpanded] = useState(false)
    const [question,setQuestion] = useState('')
    const [messages,setMessages] = useState([])
    const [newMessageInfo,setNewMessageInfo] = useState('')
    const messagesRef = useRef(null)

    function openChat(){
        setExpanded(false)
        setOpen(!open)
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

        if(!userQuestion) return null
        setQuestion('')

        try {
            createMessage('user',userQuestion)
            const chatMessage = await spServices.getChatAnswer(userQuestion)
            createMessage('chat',chatMessage)
        } catch (err) {
            console.log(err)
        }
    }

    function enterClick(event){
        if (event.key === 'Enter') {
          getAnswer(question)
        }
    }

    useEffect(() => {addMessage(newMessageInfo)},[newMessageInfo])
    useEffect(() => {if(messagesRef.current){messagesRef.current.scrollTop = messagesRef.current.scrollHeight}}, [messages])

    return(
        <>
            <div className={open ? 'Open_Chat_button--Open' : 'Open_Chat_button'} onClick={openChat}/>
            <div className={open ? 'Chat' : 'Chat--closed'}>

                <ChatTop expanded={expanded} setExpanded={setExpanded}/>
                
                <h1 className='Chat__Tittle'>🖖 Como posso ajudar?</h1>

                <div ref={messagesRef} className={expanded ? 'Chat__Timeline' : 'Chat__Timeline--Small'}>

                    { messages.length > 0 ? 
                        messages.map((d) =>
                        <div className='Chat__Timeline__Date'>
                            <p className='Chat__Timeline__Date__Message'>{d.date}</p>
                            {d.messages.map((m) => 
                                <Message author={m.author} message={m.message}/>
                            )}
                            
                        </div> 
                        )
                         :
                        <h2 className='Chat__Timeline__Text'>Role para cima <img src='icons/Arrow_Turn_Up.svg'/>para ver o histórico</h2>
                    }
                </div>
                <div className='Chat__Send_Bar'>
                    <input className='Chat__Send_Bar_Input' placeholder='Digite sua dúvida' value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={enterClick}/>
                    <button className='Chat__Send_Bar__Button' onClick={async() => {await getAnswer(question)}}>
                        <img className='Chat__Send_Bar__Button__Icon' src='icons/Send_Button_Icon.svg' alt='Send_Button_Icon'/>
                    </button>
                </div>
                

            </div>
        </>
    )
}

export default Chat