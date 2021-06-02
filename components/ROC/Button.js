import React from 'react'
import buttonStyle from '../../styles/ROC-button.module.css'
import Link from 'next/link'


function Button() {

    // const ActionLink = () => {
        
    //       location.assign('https://matheus-araujo.memberkit.com.br/checkout/xB40wb');
        
    //     }
    

    return (
        <div> <Link href="https://matheus-araujo.memberkit.com.br/checkout/xB40wb">
            <button id="btn-roc-cta" className={buttonStyle.btnCta}>QUERO CONHECER O PODER DOS CLÁSSICOS</button>
            </Link>
        </div>
    )
}

// onClick={ActionLink} 


export default Button
