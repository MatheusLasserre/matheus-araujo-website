import React from 'react'
import B6Style from '../../styles/Bloco6.module.css'
import Image from 'next/image'


function Bloco6() {
    return (
        <div>
            <div className={B6Style.bloco6Background}>
                <div className={B6Style.contentWrap}>
                    <div className={B6Style.textWrap}>
                        <p className={B6Style.heavyText}>Frequência das aulas:</p>
                        <p className={B6Style.bodyText}>Na primeira quinzena do mês, teremos uma aula para analisar o filme. Na segunda quinzena, teremos uma aula sobre o livro – <span className={B6Style.underline}>de quinze em quinze dias.</span></p>
                    </div>
                    <div className={B6Style.grayBox}>
                        <p className={B6Style.goldGradient + ' ' + B6Style.boxTitle}>BÔNUS</p>
                        <div className={B6Style.flexContainer}>
                            <div className={B6Style.flexItem}>
                                <p className={B6Style.itemTitle}>E-BOOK</p>
                                <div className={B6Style.itemImage}>
                                    <Image
                                        src="/images/ROC/BONUS-1.png"
                                        width={242}
                                        height={233}
                                        className={B6Style.itemImage}

                                    />
                                </div>
                                <p className={B6Style.itemDescription + ' ' + B6Style.goldGradient + ' ' + B6Style.imageMargin}>Como a Escola Destruiu o Seu Gosto pela Literatura</p>
                                <p className={B6Style.itemPrice}>49,90</p>
                            </div>

                            <div className={B6Style.flexItem}>
                                <p className={B6Style.itemTitle}>AULAS</p>
                                <div className={B6Style.itemImage}>
                                    <Image
                                        src="/images/ROC/BONUS-2.png"
                                        width={242}
                                        height={233}
                                        className={B6Style.itemImage}

                                    />
                                </div>
                                <p className={B6Style.itemDescription + ' ' + B6Style.goldGradient}>Gravações completas das aulas d'O Despertar </p>
                                <p className={B6Style.itemPrice}>97,90</p>
                            </div>

                            <div className={B6Style.flexItem}>
                                <p className={B6Style.itemTitle}>RESUMOS</p>
                                <div className={B6Style.itemImage + ' ' + B6Style.imageOffSet}>
                                    <Image
                                        src="/images/ROC/BONUS-3.png"
                                        width={184}
                                        height={233}
                                        className={B6Style.itemImage}
                                    />
                                </div>
                                <p className={B6Style.itemDescription + ' ' + B6Style.goldGradient}>Resumos em PDF das aulas d'O Despertar </p>
                                <p className={B6Style.itemPrice}>49,90</p>
                            </div>

                            <div className={B6Style.flexItem}>
                                <p className={B6Style.itemTitle}>MINICURSO</p>
                                <div className={B6Style.itemImage}>
                                    <Image
                                        src="/images/ROC/BONUS-4.png"
                                        width={242}
                                        height={233}
                                        className={B6Style.itemImage}

                                    />
                                </div>
                                <p className={B6Style.itemDescription + ' ' + B6Style.goldGradient + ' ' + B6Style.imageMargin}>Como Ler Literatura </p>
                                <p className={B6Style.itemPrice}>197,90</p>
                            </div>

                            <div className={B6Style.flexItem}>
                                <p className={B6Style.itemTitle}>SORTEIO</p>
                                <div className={B6Style.itemImage}>
                                    <Image
                                        src="/images/ROC/BONUS-5.png"
                                        width={242}
                                        height={233}
                                        className={B6Style.itemImage}

                                    />
                                </div>
                                <p className={B6Style.itemDescription + ' ' + B6Style.goldGradient}>2 Mentorias Personalizadas Entre os 100 primeiros alunos </p>
                                <p className={B6Style.itemPrice}>700,00</p>
                            </div>
                        </div>
                        <p className={B6Style.bonusDescription}>ATÉ ENTÃO, TODOS ESSES BÔNUS + O CURSO REDESCOBRINDO OS CLÁSICOS CUSTARIAM </p>
                        <p className={B6Style.bonusPrice}>R$1.342,60</p>
                        <p className={B6Style.promoText}>Mas garantindo agora, pelo preço promocional, você terá acesso vitalício ao conteúdo integral</p>
                    </div>
                    <div className={B6Style.decorationSymbol}><Image
                            src="/images/ROC/ROC-SMB-3.png"
                            alt="Decoration Symbol"
                            width={52}
                            height={52}
                            className={B6Style.decorationSymbol}
                        />
                        </div>
                </div>
            </div>
            <div className={B6Style.divider}></div>

            
        </div>
    )
}

export default Bloco6
