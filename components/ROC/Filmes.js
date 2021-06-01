import Image from 'next/image'
import React from 'react'
import FsStyle from '../../styles/Filmes.module.css'


function Filmes(props) {
    
    return (
        <div>

            <div className={FsStyle.movieBackground + ' ' + props.backgroundsrc}>
            <div className={FsStyle.movieBackground2}>
            <div className={FsStyle.movieBackground3}>
                <div className={FsStyle.contentWrap}>
                    <div className={FsStyle.classWrap}>
                        <p className={FsStyle.classMonth}>{props.month}</p> 
                        <p className={FsStyle.classTheme}>{props.theme}</p>
                        <p className={FsStyle.movieText}>{props.text}</p>
                    </div>
                    <div className={FsStyle.classInfoWrap}>
                        <div className={FsStyle.classBookWrap}>
                                <Image
                                    src={props.src}
                                    width={80}
                                    height={118}
                                />
                            </div>
                            <div className={FsStyle.classTitlesWrap}>
                            <p className={FsStyle.classMovieTitle}>Filme: <span className={FsStyle.classMovieName}>{props.movie}</span></p> 
                            <p className={FsStyle.classBookTitle}>Livro: <span className={FsStyle.classBookName}>{props.book}</span></p>
                            </div>
                    </div>
                    
                    

                </div>
            </div>
            </div>
            </div>
            <div className={FsStyle.contentGrayBar}></div>
        </div>
    )
}

export default Filmes
