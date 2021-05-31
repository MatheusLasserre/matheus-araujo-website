import Image from 'next/image'
import React from 'react'
import heroStyle from '../../styles/hero.module.css'
import Button from '../../components/ROC/Button'


function Hero() {
    return (
        <div>
            <div className={heroStyle.heroBackground}>
            <div className={heroStyle.heroBackground2}>
            <div className={heroStyle.heroBackground3}>
                    <div className={heroStyle.heroWrap}>
                        <div className={heroStyle.heroSpacer}></div>
                        <div className={heroStyle.logo}>
                            <Image
                                src="/images/ROC/ROC-LOGO-3-4.png"
                                alt="logo"
                                width={282}
                                height={62}
                                className={heroStyle.logo}
                            />
                        </div>
                        <h1 className={heroStyle.heroHeadline}>DOMINE A ARTE DE <span className={heroStyle.goldGradient + ' ' +  heroStyle.heroHeadline}>LER E ENTENDER OS CLASSICOS</span> E APRENDA A APLICAR TODOS OS SEUS ENSINAMENTOS NO DIA A DIA.</h1>
                        <p className={heroStyle.firstParagraph}>Esse é o melhor caminho possível para você,
                        <span className={heroStyle.blockText + ' ' + heroStyle.break}> Iniciante ou </span><span className={heroStyle.blockText + ' ' + heroStyle.heroTextSpacer}>leitor avançado </span>redescobrir e entender o <span className={heroStyle.strong}>poder dos clássicos</span> e extrair todas as transformações que eles podem proporcionar em sua vida.
                        </p>
                        <Button></Button>
                        
                        <div className={heroStyle.decorationSymbol}><Image
                            src="/images/ROC/ROC-SMB-3.png"
                            alt="Decoration Symbol"
                            width={52}
                            height={52}
                            className={heroStyle.decorationSymbol}
                        />
                        </div>
                        </div> 
            </div>  
            </div>
            </div>
        </div>
    )
}

export default Hero
