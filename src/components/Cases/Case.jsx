import '../../styles/components/Cases/Case.sass'

function Case(props){

    const {title,description,link} = props

    return(
            <div className='Case'>
                <h2 className='Case__Title'>{title}</h2>
                <p className='Case__text'>{description}</p>
                <button className='Case__Button'>
                    <a href={link}>Saiba mais</a>
                    <img className='Button__Icon' src='icons/arrow-right.svg'/>
                </button>
            </div>
    )
}

export default Case