import Head from 'next/head'
import style from '../styles/redescobrindo-os-classicos.module.css'
import Hero from '../components/ROC/Hero.js'

export default function getStaticprops() {
  return (
      <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Redescobrindo os Clássicos</title>
            {/* <!-- Facebook Pixel Code --> */}
            <script src="/fscript.js"></script>
          
        </Head>
        <div className={ style.virtualBody }>
          <Hero></Hero>
        </div>
      </>

  )
}