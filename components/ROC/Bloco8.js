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
                <div className={B8Style.flexContainerTestimonial}>
                <div className={B8Style.testimonialBox}>
                <div className={B8Style.testimonialNameBox}>
                        <p className={B8Style.testimonialName}>Guilherme Cunha de Carvalho</p>
                    </div>
                    <div className={B8Style.testimonialBoxDivider}></div>
                    <p className={B8Style.testimonialText}>A abordagem do Matheus, de compreender os clássicos como espelho, quem eu sou, e como janela, quem eu posso ser ou como os outros são, reaqueceu a minha paixão pela literatura. Ele promove a literatura como ela realmente é: uma experiência existencial que enriquece a nossa vida.</p>
                </div>

                <div className={B8Style.testimonialBox}>
                <div className={B8Style.testimonialNameBox}>
                        <p className={B8Style.testimonialName}>Jaciara Pires</p>
                    </div>
                    <div className={B8Style.testimonialBoxDivider}></div>
                    <p className={B8Style.testimonialText}>Com a sua condução e orientação, as aulas e as leituras nos ensinam a ler as histórias e também os personagens, ajudando-nos a nos perceber em nossa própria realidade. Os clássicos são atemporais e são experiências que talvez nunca viveríamos se não fosse através dos livros.</p>
                </div>

                <div className={B8Style.testimonialBox}>
                <div className={B8Style.testimonialNameBox}>
                        <p className={B8Style.testimonialName}>Mariana Salustiano</p>
                    </div>
                    <div className={B8Style.testimonialBoxDivider}></div>
                    <p className={B8Style.testimonialText}>A literatura é apresentada pelo Matheus sob uma abordagem diferente de tudo que já vi. Conseguimos compreender que literatura é muito mais que simplesmente um livro antigo que um estranho escreveu. Não! Literatura é autoconhecimento, é evolução intelectual, literatura é um dos poucos meios que temos para nos conhecermos, nos tornarmos pessoas melhores, para enxergarmos todas as dimensões da vida e com isso melhorarmos nossa realidade de vida.</p>
                </div>


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
