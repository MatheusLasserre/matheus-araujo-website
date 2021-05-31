import Head from 'next/head'
import styles from '../styles/o-despertar-inscricao.module.css'
import Image from 'next/image'

export default function getStaticprops() {
  return (
      <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Redescobrindo os Clássicos</title>
            {/* <!-- Facebook Pixel Code --> */}
            <script src="/fb-pixel.js"></script>
            <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2642886242675122&ev=PageView&noscript=1"/>
        </Head>
        <h1>URL da Landing Page</h1>
      </>

  )
}