import React from 'react'
import CrStyle from '../../styles/Creditos.module.css'

function Creditos() {
    return (
        <div>
            <div className={CrStyle.background}>
                <div className={CrStyle.contentWrap}>
                    <p className={CrStyle.text}>© 2021 Matheus Araujo - Todos os direitos reservados - feito por @matheus.lasserre</p>
                </div>
            </div>
        </div>
    )
}

export default Creditos
