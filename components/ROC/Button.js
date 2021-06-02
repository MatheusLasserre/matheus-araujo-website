import React from 'react'
import buttonStyle from '../../styles/ROC-button.module.css'


function Button() {

    const ActionLink = () => {
        
          location.assign('https://matheus-araujo.memberkit.com.br/checkout/xB40wb');
        
        }
    

    return (
        <div>
            <button id="btn-roc-cta" onClick={ActionLink} className={buttonStyle.btnCta}>QUERO CONHECER O PODER DOS CLÁSSICOS</button>
        </div>
    )
}




export default Button
