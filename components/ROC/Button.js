import React from 'react'
import buttonStyle from '../../styles/ROC-button.module.css'
import Link from 'next/link'
import Swal from 'sweetalert2'



function Button(props) {


    const ActionLink = () => {

        Swal.fire({ icon: 'error', title: 'As vendas foram encerradas!', confirmButtonText: 'Ah :('})
        //   alert('As vendas estão encerradas!');
        return false;
    
        
        }
    

    return (
        <div> 
            {/* <Link href="https://matheus-araujo.memberkit.com.br/checkout/xVWyDQ"> */}
            <button id="btn-roc-cta" onClick={ActionLink} className={buttonStyle.btnCta}>{props.txt}</button>
            {/* </Link> */}
        </div>
    )
}




export default Button
