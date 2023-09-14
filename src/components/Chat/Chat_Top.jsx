
function ChatTop(props){
    
    const {expanded,setExpanded} = props

    function expandChat(){
        setExpanded(!expanded)
    }
    return(
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
    )
}

export default ChatTop