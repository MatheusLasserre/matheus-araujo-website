import Head from 'next/head'
import style from '../styles/redescobrindo-os-classicos.module.css'
import Hero from '../components/ROC/Hero.js'
import Bloco2 from '../components/ROC/Bloco2.js'
import Bloco3 from '../components/ROC/Bloco3.js'
import Bloco4 from '../components/ROC/Bloco4.js'
import Bloco5 from '../components/ROC/Bloco5.js'
import Bloco6 from '../components/ROC/Bloco6.js'
import Bloco7 from '../components/ROC/Bloco7.js'
import Bloco8 from '../components/ROC/Bloco8.js'
import Bloco9 from '../components/ROC/Bloco9.js'
import Creditos from '../components/ROC/Creditos.js'




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
          <Bloco4></Bloco4>
          <Bloco5></Bloco5>
          <Bloco6></Bloco6>
          <Bloco7></Bloco7>
          <Bloco8></Bloco8>
          <Bloco9></Bloco9>
          <Creditos></Creditos>
          
        </div>
      </>

  )
}