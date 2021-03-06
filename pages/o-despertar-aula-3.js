import React from 'react'
import odaStyle from '../styles/o-despertar-aulas.module.css'
import Image from 'next/image'
import AulasDespertar from '../components/ROC/aulasDespertar.js'
import Head from 'next/head'
import Link from 'next/link'

function oDespertarAulas() {



    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Aula 3 - O Despertar</title>
                {/* <!-- Facebook Pixel Code --> */}
                <script src="/fscript-3.js"></script>
                <link rel="icon" href="/vercel.png" />
          
            </Head>
            <div className={odaStyle.contentWrap}>
                <div className={odaStyle.overflowControl}>
                    <div className={odaStyle.background}>
                        <div className={odaStyle.background2}>
                            <div className={odaStyle.background3}>
                                <div className={odaStyle.decorationSymbol}>
                                    <Image
                                        src="/images/ROC/ROC-SMB-3.png"
                                        alt="Decoration Symbol"
                                        width={32}
                                        height={32}
                                        className={odaStyle.decorationSymbol}
                                    />
                                </div>

                                <div className={odaStyle.logo}>
                                <Image
                                        src="/images/ROC/ROC-LOGO-DESPERTAR.png"
                                        alt="Despertar logo"
                                        width={289}
                                        height={70}
                                        className={odaStyle.decorationSymbol}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={odaStyle.videosBackground}>
            <div className={odaStyle.videosWrap}>
                <div className={odaStyle.videoWrap}>
                    <AulasDespertar
                        src="https://www.youtube.com/embed/9CI9135p6m0"
                        titlee="AULA 3"
                        subtitle="Os Cl??ssicos Podem Mudar a Sua Vida"
                    />
                </div>
                <div className={odaStyle.linkcontainer2}>
                <Link href="https://www.omatheusaraujo.com.br/o-despertar-aula-2">
            <p className={odaStyle.textlink}>&lt;&nbsp;Aula 2</p>
            </Link>
            </div>
            </div>
           
            </div>

            </div>
        </div>
    )
}

export default oDespertarAulas
