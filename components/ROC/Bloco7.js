import React from 'react'
import B7Style from '../../styles/Bloco7.module.css'
import Image from 'next/image'
import Button from '../../components/ROC/Button.js'

function Bloco7() {
    return (
        <div>
            <div className={B7Style.contentWrap}>
                <div className={B7Style.flexItemLogo}>
                <div className={B7Style.logo}>
                    <Image
                        src="/images/ROC/ROC-LOGO-3-4.png"
                        alt="logo"
                        width={282}
                        height={62}
                        className={B7Style.logo}
                    />
                </div>
                
                    <div className={B7Style.gradientBox}>
                        <ul className={B7Style.listEstructure}>
                            <li className={B7Style.listItem}>Curso Redescobrindo os Clássicos</li>
                            <li className={B7Style.listItem}>E-book: Como a escola destruiu o seu gosto pela Literatura</li>
                            <li className={B7Style.listItem}>Gravações completas das aulas d'O Despertar</li>
                            <li className={B7Style.listItem}>Resumos em PDF das aulas d'O Despertar</li>
                            <li className={B7Style.listItem}>Minicurso: Como ler Literatura </li>
                            <li className={B7Style.listItem}>Sorteio de 2 (duas) Mentorias Personalizadas entre os 100 primeiros alunos</li>
                        </ul>
                    </div>
                    </div>
                    
                    
                <div className={B7Style.flexItem2}>
                <p className={B7Style.oldPrice}> de R$1.342,60</p>
                <p className={B7Style.forJust}>por apenas</p>
                <p className={B7Style.actualPrice}><span className={B7Style.actualPricePrefix}>12x DE</span> R$20,58</p>
                <p className={B7Style.actualPriceOnCashPreFix}>ou <span className={B7Style.actualPriceOnCash}>R$247,00</span> à vista</p>
                <div className={B7Style.warranty}>
                    <Image
                        src="/images/ROC/GARANTIA-1.png"
                        alt="logo"
                        width={224}
                        height={228}
                        className={B7Style.warranty}
                    />
                </div>
                <p className={B7Style.warrantyDescription}>Se o curso não lhe agregar em nada, lhe dou <span className={B7Style.warrantyUnderline}>15 dias de garantia incondicional</span>, para, sem compromisso, você pegar o seu dinheiro de volta.</p>
                <p className={B7Style.attention}>ATENÇÃO:</p>
                <p className={B7Style.attentionDescription}>ESTE VALOR ESTARÁ DISPONÍVEL <span className={B7Style.attentionDescriptionUnderline}>POR TEMPO LIMITADO DE 7 DIAS.</span></p>
                <Button
                    txt="QUERO GARANTIR A MINHA VAGA"
                />
                </div>
                <div className={B7Style.decorationSymbol}>
                        <Image
                            src="/images/ROC/ROC-SMB-3.png"
                            alt="Decoration Symbol"
                            width={52}
                            height={52}
                            className={B7Style.decorationSymbol}
                        />
                </div>
            </div>
            <div className={B7Style.divider}></div>
        </div>
    )
}

export default Bloco7
