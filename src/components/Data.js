import { useState } from "react"


const FaqItem = (props) => {

    const [expand, setExpand] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const [btn, setBtn] = useState('+')
    const [btn2, setBtn2] = useState('+')

    const goBig = () => {

        setExpand(!expand)
        setExpand2(false)
        if(!expand){
            setBtn('-')
        }else{
            setBtn('+')
        }
    }

    const expandAgian = () => {
        setExpand2(!expand2)
        if(!expand2){
            setBtn2('-')
        }else{
            setBtn2('+')
        }
    }

    return(

        <section>
            
            <div className="frageDiv">
                <p>{props.question}</p>
                <button onClick={goBig}>{btn}</button>
            </div>

            <div className="antwortDiv" style={!expand ? {display: 'none'}:null} > 
                <p>{props.answer}</p>
                <button onClick={expandAgian}>{btn2}</button>
            </div>
            <div className="textDiv" style={!expand2 ? {display: 'none'}:null} >
                <p>{props.answerLong}</p>
            </div>
            
        </section>
    )
}

export default FaqItem