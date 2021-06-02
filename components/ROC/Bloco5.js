import React from 'react'
import B5Style from '../../styles/Bloco5.module.css'
import Filmes from './Filmes.js'
import FsStyle from '../../styles/Filmes.module.css'

function Bloco5() {
    return (
        <div>
            <div className={B5Style.contentWrap}>
                <div className={B5Style.bloco5Background2}>
                    <div className={B5Style.bloco5Background}>
                        <p className={B5Style.headText}>Como o curso irá funcionar?</p>
                        <p className={B5Style.bodyText}>Mensalmente, iremos trabalhar temas que perpassam aspectos fundamentais da vida humana e refletiremos a partir do poder artístico do cinema para posteriormente adentrarmos no clássico literário escolhido.</p>
                        <p className={B5Style.bodyText}>Ou seja, <span className={B5Style.underline}>teremos um filme e um clássico da literatura analisados</span> todo mês, a partir das perspectivas temáticas da vida humana que se seguem:</p>
                    </div>
                </div>
                    <div className={B5Style.FilmesWrap}>
                            <div className={B5Style.primeiroFilme}>
                                <Filmes
                                    month="Julho:"
                                    theme="O Despertar da Vida"
                                    text="Você descobrirá porque a vida precisa de um certo despertar para que faça realmente sentido e você, definitivamente, a viva. A literatura será capaz de te fazer “acordar” para o que importa."
                                    movie="Tempo de Despertar"
                                    book="A Morte de Ivan Ilitch"
                                    src="/images/ROC/AULAS/LIVRO-1.jpg"
                                    backgroundsrc={FsStyle.tempoDeDespertar}
                                />
                            </div>
                            <div className={B5Style.segundoFilme}>
                                <Filmes
                                    month="Agosto:"
                                    theme="A Busca da Felicidade"
                                    text="A felicidade é um dos maiores mistérios da humanidade. Você entenderá, a partir de dois clássicos, um da cinema e um da literatura, o que é ter uma vida feliz."
                                    movie="Felicidade não se compra"
                                    book="Um coração simples"
                                    src="/images/ROC/AULAS/LIVRO-5.jpg"
                                    backgroundsrc={FsStyle.felicidade}
                                />
                            </div>
                            <div className={B5Style.terceiroFilme}>
                                <Filmes
                                    month="Setembro:"
                                    theme="O Vício do Ressentimento "
                                    text="Você entenderá porque deverá ser muito mais grato, dando valor à vida que possui e ao que tem, e como é possível combater o vício moderno do ressentimento e a forma que ele nos afeta."
                                    movie="Taxi Driver"
                                    book="Memórias do Subsolo"
                                    src="/images/ROC/AULAS/LIVRO-3.jpg"
                                    backgroundsrc={FsStyle.taxiDriver}
                                />
                            </div>
                            <div className={B5Style.quartoFilme}>
                                <Filmes
                                    month="Outubro:"
                                    theme="Como Resistir às Tentações"
                                    text="As tentações mundanas estarão presentes a todo momento e você terá o aprendizado fundamental de como se comportar e resistir perante elas. A literatura nos prova isso constantemente, acredite."
                                    movie="Os Suspeitos"
                                    book="Cartas de um Diabo ao seu aprendiz"
                                    src="/images/ROC/AULAS/LIVRO-4.jpg"
                                    backgroundsrc={FsStyle.osSuspeitos}
                                />
                            </div>
                            <div className={B5Style.quintoFilme}>
                                <Filmes
                                    month="Novembro:"
                                    theme="Os Problemas dos Relacionamentos"
                                    text="Em uma era onde os relacionamentos são cada vez mais efêmeros e vazios, você entenderá como é possível aprender, através da literatura, a lidar com os principais problemas existentes em um relacionamento conjugal ou familiar."
                                    movie="Pequena Miss Sunshine"
                                    book="Laços de Família"
                                    src="/images/ROC/AULAS/LIVRO-2.jpg"
                                    backgroundsrc={FsStyle.matrix}
                                />
                            </div>
                            <div className={B5Style.sextoFilme}>
                                <Filmes
                                    month="Dezembro:"
                                    theme="Como Encontrar a Vocação"
                                    text="A vocação é um dos grandes fatores que revestem o sentido da vida e ação humana. Como a literatura pode te ajudar a encontrar sua vocação? Você entenderá que a urgência dessa necessidade."
                                    movie="Rei Leão"
                                    book="Hamlet"
                                    src="/images/ROC/AULAS/LIVRO-6.jpg"
                                    backgroundsrc={FsStyle.reiLeao}
                                />
                            </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Bloco5
