import React from 'react'
import B4Style from '../../styles/Bloco4.module.css'
import ProblemCard from '../../components/ROC/ProblemCard.js'
import Button from '../../components/ROC/Button.js'
import Image from 'next/image'


function Bloco4() {
    return (
        <div>
            <div className={B4Style.bloco4background}>
                <div className={B4Style.contentWrap}>
                    <p className={B4Style.goldGradient}>E OS CLÁSSICOS PODEM MUDAR A SUA VIDA – EM TODOS OS SENTIDOS.</p>
                    <p className={B4Style.lightText}>Todavia, surge uma pergunta nítida agora: </p>
                    <p className={B4Style.heavyText}>“Sim, mas na real, <span className={B4Style.blockText}>o que eu ganho na minha vida</span> aprendendo a ler bem os clássicos?”</p>
                    <div className={B4Style.ProblemCardWrap}>
                        <ProblemCard 
                        src="/images/ROC/neuromarketing.svg" 
                        title="Você aprenderá a viver melhor –" 
                        text="por mais abstrato que isso lhe pareça, esse deveria ser o motivo que abrangeria, por si só, todos os outros benefícios." />
                        <ProblemCard
                            src="/images/ROC/group.svg"
                            title="Você se entenderá e também compreenderá o próximo na sua totalidade – "
                            text="entendendo o comportamento e a natureza humana como um todo."
                        />
                        <ProblemCard
                            src="/images/ROC/world-grid.svg"
                            title="Você entenderá o mundo em que vive –  "
                            text="e poderá se precaver diante das maldades dele."
                        />
                        <ProblemCard
                            src="/images/ROC/contract.svg"
                            title="Você aprenderá a escrever melhor – "
                            text="através do contato direto com a forma e o estilo que os grandes escritores da literatura universal escreveram."
                        />
                        <ProblemCard
                            src="/images/ROC/outofthebox.svg"
                            title="Você pensará e se comunicará melhor – "
                            text="através do contato direto com a forma e o estilo que os grandes escritores da literatura universal escreveram."
                        />
                    </div>
                    <p className={B4Style.goldGradient + ' ' + B4Style.secondHead}>O <span className={B4Style.goldUnderline}>REDESCOBRINDO </span><span className={B4Style.goldUnderline}>OS CLÁSSICOS</span> É A CHAVE PARA VOCÊ TER ACESSO A TODO ESSE MUNDO DE POSSIBILIDADES QUE OS CLÁSSICOS TE OFERECEM.</p>
                    <Button
                        txt="QUERO CONHECER O PODER DOS CLÁSSICOS"
                    />
                    <div className={B4Style.decorationSymbol}><Image
                            src="/images/ROC/ROC-SMB-3.png"
                            alt="Decoration Symbol"
                            width={52}
                            height={52}
                            className={B4Style.decorationSymbol}
                        />
                        </div>
                </div>
            </div>
            <div className={B4Style.divider}></div>

        </div>
    )
}

export default Bloco4
