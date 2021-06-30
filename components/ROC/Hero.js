import Image from 'next/image'
import React from 'react'
import heroStyle from '../../styles/hero.module.css'
import Button from '../../components/ROC/Button'
import Countdown from './countdown'


function Hero() {

    var countDownDate = new Date("Jul 1, 2021 00:00:00").getTime();

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const hoursMinSecs = {hours:hours, minutes: minutes, seconds: seconds}

    return (
        <div>
            <div className={heroStyle.heroBackground4}>
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
                        <h1 className={heroStyle.heroHeadline}>DOMINE A ARTE DE <span className={heroStyle.goldGradient + ' ' +  heroStyle.heroHeadline + ' ' + heroStyle.iPhoneGlitch}>LER E ENTENDER OS CLÁSSICOS</span> E APRENDA A APLICAR TODOS OS SEUS ENSINAMENTOS NO DIA A DIA.</h1>
                        <p className={heroStyle.firstParagraph}>Este é o melhor caminho possível para você, <span className={heroStyle.blockText + ' ' + heroStyle.break}> Iniciante ou&nbsp;</span><span className={heroStyle.blockText + ' ' + heroStyle.heroTextSpacer}>leitor avançado </span>redescobrir e entender o <span className={heroStyle.strong}>poder dos clássicos</span> e extrair todas as transformações que eles podem proporcionar em sua vida.
                        </p>
                        <Button
                        txt="QUERO CONHECER O PODER DOS CLÁSSICOS"
                        />

                        <Countdown hoursMinSecs={hoursMinSecs}/>
                        
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
        </div>
    )
}

export default Hero
