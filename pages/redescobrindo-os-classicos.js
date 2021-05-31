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
        </Head>
        <h1>URL da Landing Page</h1>
      </>

  )
}