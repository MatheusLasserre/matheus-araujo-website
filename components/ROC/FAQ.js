import React from 'react'
import Fstyle from '../../styles/FAQ.module.css'

function FAQ(props) {
    return (
        <div>
            <div className={Fstyle.questionWrap}>
                <p className={Fstyle.question}>{props.question}</p>
            </div>
            <div className={Fstyle.answerBackground}>
                <p className={Fstyle.answer}>{props.answer}</p>
            </div>
        </div>
    )
}

export default FAQ