import Case from './Case'
import spServices from '../../service/SP_API'
import { useState, useEffect } from 'react'
import '../../styles/components/Cases/Cases.sass'

function Cases(){

    const [cases,setCases] = useState([])

    async function getCases(){
        try {
            const newCases = await spServices.getCases()
            setCases(newCases)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{getCases()},[])
    
    return(
        <div className='Cases' id='Cases'>
            <div className='Cases__Title_Space'>
                <h1 className='Cases__Title_Space__Title'>Problemas complexos.<br/>Soluções <span className='Cases__Title_Space_Title--line-through'>complexas</span> <span className='Cases__Title_Space_Title--italic'>criativas_</span></h1>
                <p className='Case__Title_Space__Subtitle'>Confira nossos cases de sucesso que vão além do mundo juridico.</p>
            </div>
            {cases.map((c) => 
            <Case title={c.title} description={c.description} link={c.link}/>)}       
        </div>
    )
}

export default Cases