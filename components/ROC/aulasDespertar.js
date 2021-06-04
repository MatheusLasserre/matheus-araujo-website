import React from 'react'
import adStyle from '../../styles/aulasDespertar.module.css'

function aulasDespertar(props) {
    return (
        <div>


            <div className={adStyle.contentWrap}>
                <p className={adStyle.title}>{props.titlee}</p>
                <p className={adStyle.subtitle}>{props.subtitle}</p>
                <div className={adStyle.videoWrap}>
                <iframe
                    src={props.src}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowfullscreen
                    title="video"
                    width={1280}
                    height={720}
                    className={adStyle.videoWrap}
                />
                </div>
            </div>
        </div>
    )
}

export default aulasDespertar
