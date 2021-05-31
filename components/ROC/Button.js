import React from 'react'
import buttonStyle from '../../styles/ROC-button.module.css'

function Button() {
    return (
        <div>
            <button id="btn-roc-cta" onClick={comprarROC()} className={buttonStyle.btnCta}>QUERO CONHECER O PODER DOS CLÁSSICOS</button>
        </div>
    )
}

function comprarROC() {
            console.log('clicou')

        }

export default Button
