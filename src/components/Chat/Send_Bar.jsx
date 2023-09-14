import './styles/Send_Bar.sass'

function SendBar(props){
    const {question,setQuestion, getAnswer} = props

    function enterClick(event){
        if (event.key === 'Enter') {
          getAnswer(question)
        }
    }

    return(
        <div className='Send_Bar'>
                    <input className='Send_Bar__Input'
                    placeholder='Digite sua dúvida' 
                    value={question} 
                    onChange={e => setQuestion(e.target.value)} 
                    onKeyDown={enterClick}/>
                    <button className='Send_Bar__Button' onClick={async() => {await getAnswer(question)}}>
                        <img className='Send_Bar__Button__Icon' src='icons/Send_Button_Icon.svg' alt='Send_Button_Icon'/>
                    </button>
                </div>
    )
}

export default SendBar