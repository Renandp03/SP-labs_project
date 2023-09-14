import './styles/Messages.sass'

function Message(props){
    const {author,message} = props

    return(
        <div className={author == 'user' ? 'Message_Space--User' : 'Message_Space--Chat'}>
            {author == 'chat' && <img src="imgs/Chat_Avatar.svg" alt="Chat_Avatar"/>}
            <p className='Message_Space__Text'>
                {message}
            </p>
        </div>
    )
}

export default Message