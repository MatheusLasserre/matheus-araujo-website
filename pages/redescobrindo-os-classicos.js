import Head from 'next/head'
import style from '../styles/redescobrindo-os-classicos.module.css'
import Hero from '../components/ROC/Hero.js'
import Bloco2 from '../components/ROC/Bloco2.js'
import Bloco3 from '../components/ROC/Bloco3.js'


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
          <Bloco2></Bloco2>
          <Bloco3></Bloco3>

        </div>
      </>

  )
}