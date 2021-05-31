import React from 'react'
import buttonStyle from '../../styles/ROC-button.module.css'


function Button() {

    const ActionLink = () => {
        
        //   location.assign('#');
        alert('Manda o link do curso, porra')
        }
    

    return (
        <div>
            <button id="btn-roc-cta" onClick={ActionLink} className={buttonStyle.btnCta}>QUERO CONHECER O PODER DOS CLÁSSICOS</button>
        </div>
    )
}




export default Button
