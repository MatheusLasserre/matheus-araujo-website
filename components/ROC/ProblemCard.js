import Image from 'next/image'
import React from 'react'
import PcardStyle from '../../styles/ProblemCard.module.css'



function ProblemCard(props) {
    return (
        <div>
            <div className={PcardStyle.cardWrap}>
                <p className={PcardStyle.cardTitle}>{props.title}</p>
                <p className={PcardStyle.cardText}>{props.text}</p>
                <div className={PcardStyle.cardSymbol}>
                    <Image
                        src={props.src}
                        width={50}
                        height={50}
                        className={PcardStyle.cardSymbol}

                    />
                </div>
            </div>
        </div>
    )
}

export default ProblemCard
