import '../styles/components/Cases.sass'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Cases(){

    const [cases,setCases] = useState([])

    async function getCases(){
        const URL = import.meta.env.VITE_URL
        axios.get(`${URL}/cases`)
        .then((res) => {setCases(res.data.cases)})
        .catch((err) => console.log(err.name)) 
    }

    useEffect(()=>{getCases()},[])
    
    return(
        <div className='Cases' id='Cases'>
            <div className='Cases__Title_Space'>
                <h1 className='Cases__Title_Space__Title'>Problemas complexos.<br/>Soluções <span className='Cases__Title_Space_Title--line-through'>complexas</span> criativas_</h1>
                <p className='Case__Title_Space__Subtitle'>Confira nossos cases de sucesso que vão além do mundo juridico.</p>
            </div>
            {
            cases.map((c) => 
            <div className='Case'>
                <h2 className='Case__Title' onClick={getCases}>{c.title}</h2>
                <p className='Case__text'>{c.description}</p>
                <button className='Case__Button'><a href={c.link}>Saiba mais</a><img className='Button__Icon' src='icons/arrow-right.svg'/></button>
            </div>)
            }       
        </div>
    )
}

export default Cases