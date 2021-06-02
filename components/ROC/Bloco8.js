import React from 'react'
import B8Style from '../../styles/Bloco8.module.css'
import Image from 'next/image'

function Bloco8() {
    return (
        <div>
            <div className={B8Style.contentWrap}>
                <div className={B8Style.quotesWrap}>
                    <Image
                        src="/images/ROC/quotes.svg"
                        alt="Decoration Symbol"
                        width={54}
                        height={33}
                        className={B8Style.quotesWrap}
                    />
                </div>
                <p className={B8Style.goldHead}>O QUE ESTÃO DIZENDO SOBRE A METODOLOGIA:</p>
                
                <div className={B8Style.testimonialBox}>
                    <div className={B8Style.testimonialNameBox}>
                        <p className={B8Style.testimonialName}>Guilherme Cunha de Carvalho</p>
                    </div>
                    <div className={B8Style.testimonialBoxDivider}></div>
                    <p className={B8Style.testimonialText}>A abordagem do Matheus, de compreender os clássicos como espelho, quem eu sou, e como janela, quem eu posso ser ou como os outros são, reaqueceu a minha paixão pela literatura. Ele promove a literatura como ela realmente é: uma experiência existencial que enriquece a nossa vida.</p>
                </div>
                <div className={B8Style.decorationSymbol}>
                        <Image
                            src="/images/ROC/ROC-SMB-3.png"
                            alt="Decoration Symbol"
                            width={52}
                            height={52}
                            className={B8Style.decorationSymbol}
                        />
                </div>
            </div>
            <div className={B8Style.divider}></div>

        </div>
    )
}

export default Bloco8
