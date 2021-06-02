import React from 'react'
import heroStyle from '../styles/hero.module.css'
import Image from 'next/image'
import robStyle from '../styles/roc-obrigado.module.css'
import Head from 'next/head'


function rocObrigado() {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sua inscrição foi confirmada!</title>
                {/* <!-- Facebook Pixel Code --> */}
                <script src="/fscript-2.js"></script>
            </Head>
            <div className={robStyle.virtualBody}>
            <div className={heroStyle.heroBackground4}>
            <div className={heroStyle.heroBackground}>
            <div className={heroStyle.heroBackground2}>
            <div className={heroStyle.heroBackground3}>
                    <div className={heroStyle.heroWrap}>
                        <div className={heroStyle.heroSpacer}></div>
                        <h1 className={robStyle.whiteHeadline}><p className={robStyle.goldHeadline}>Parabéns,</p> sua inscrição foi confirmada!</h1>
                        <p className={robStyle.bodyText}>Enviamos o seu acesso por e-mail.</p>
                        <div className={robStyle.Space}>
                            <Image
                                src="/images/ROC/ROC-LOGO-3-4.png"
                                alt="logo"
                                width={248}
                                height={54}
                                className={heroStyle.logo}
                            />
                        </div>
                       
                        
                       
                    </div> 
            </div>  
            </div>  
            </div>  
            </div>
            </div>
        </div>
    )
}

export default rocObrigado
