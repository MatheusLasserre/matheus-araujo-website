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
                <title>Aulas - O Despertar</title>
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
                        src="https://www.youtube.com/embed/OIUbErA7wy0"
                        titlee="AULA 2"
                        subtitle="O Que Realmente é Literatura"
                    />
                </div>
                <div className={odaStyle.linkcontainer}>
                <Link href="https://www.omatheusaraujo.com.br/o-despertar-aula-1">
            <p className={odaStyle.textlink}>&lt;&nbsp;Aula 1</p>
            </Link>
            <Link href="https://omatheusaraujo.com.br/o-despertar-aula-3">
            <p className={odaStyle.textlink}>Aula 3&nbsp;&gt;</p>
            </Link>
            </div>
            </div>
           
            </div>

            </div>
        </div>
    )
}

export default oDespertarAulas
