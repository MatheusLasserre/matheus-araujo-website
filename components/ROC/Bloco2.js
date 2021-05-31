import React from 'react'
import B2Style from '../../styles/Bloco2.module.css'

function Bloco2() {
    return (
        <div>
            <div className={B2Style.bloco2Wrap}>
                <p className={B2Style.lightText}>Vou te contar um fato:</p>
                <p className={B2Style.heavyText}>todos nós sabemos, desde de muito cedo, que <span className={B2Style.blockText}>devemos ler.</span></p>
                <p className={B2Style.lightText + ' ' + B2Style.secondParagraph}>E esse fato pode te parecer muito óbvio, se você levar em conta o que te falaram desde o primário.</p>
                <p className={B2Style.bodyText}>Fomos ensinados que a leitura é algo extremamente importante na nossa vida, <span className={B2Style.underline}>mas não fomos ensinados a como deveríamos ler um bom livro.</span></p>
                <p className={B2Style.bodyText}>Ou melhor, não nos ensinaram, efetivamente, <span className={B2Style.underline}>quais eram os bons livros e como deveríamos lê-los.</span></p>
                <p className={B2Style.bodyText}>E isso <span className={B2Style.black}>NÃO</span> é culpa sua!</p>
                <p className={B2Style.goldGradient}>A ESCOLA NÃO TE ENSINOU A LER LITERATURA</p>
                <p className={B2Style.bodyText + ' ' + B2Style.bodyTextSpacing}>Eu sei, o seu professor lhe ensinou o que é arcadismo; você aprendeu todas as correntes modernistas possíveis; aprendeu, para passar no vestibular, o maior nome representante da corrente naturalista; repetiu insistentemente a pergunta “traiu ou não traiu” e aprendeu que Machado de Assis era um dos nossos maiores escritores...</p>
                <p className={B2Style.goldGradient}>Você aprendeu tudo, menos o que é literatura!</p>
                <p className={B2Style.bodyText + ' ' + B2Style.bodyTextSpacing}>E repito: a culpa não é sua. A escola consegue, através de uma grade curricular extremamente engessada, <span className={B2Style.underline}>destruir todo o gosto possível pela literatura</span>, antes mesmo que ela surja:</p>

            
            </div>
            <div className={B2Style.divider}></div>
            
        </div>
    )
}

export default Bloco2
