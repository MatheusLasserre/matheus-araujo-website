import React from 'react'
import B5Style from '../../styles/Bloco5.module.css'

function Bloco5() {
    return (
        <div>
            <div className={B5Style.contentWrap}>
                <div className={B5Style.bloco5Background}>
                    <p className={B5Style.headText}>Como o curso irá funcionar?</p>
                    <p className={B5Style.bodyText}>Mensalmente, iremos trabalhar temas que perpassam aspectos fundamentais da vida humana e refletiremos a partir do poder artístico do cinema para posteriormente adentrarmos no clássico literário escolhido.</p>
                    <p className={B5Style.bodyText}>Ou seja, <span className={B5Style.underline}>teremos um filme e um clássico da literatura analisados</span> todo mês, a partir das perspectivas temáticas da vida humana que se seguem:</p>
                </div>
            </div>
        </div>
    )
}

export default Bloco5
