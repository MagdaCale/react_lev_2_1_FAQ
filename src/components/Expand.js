import { useState } from "react"
import faq from './FAQ';
import Data from "./Data";


const Expand = () => {
    return(
        <>
            {
                faq.map((elt) =>
                <Data 
                question={elt.question}
                answer={elt.answer}
                answerLong={elt.answerLong}
                />
                )
            }
        </>
    )
}

export default Expand