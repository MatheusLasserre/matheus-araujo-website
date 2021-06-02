import React, { useState} from 'react'
import Fstyle from '../../styles/FAQ.module.css'

function FAQ(props) {

    
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div onClick={(e) => { e.preventDefault(); setToggle(!toggle)}} className={Fstyle.questionWrap}>
                <p className={Fstyle.question}>{props.question}</p>
            </div>
            <div className={Fstyle.answerBackground + ' ' + `${toggle === true ? `${Fstyle.show}` : ''}`}>
                <p className={Fstyle.answer}>{props.answer}</p>
            </div>
        </div>
    )
}

export default FAQ
