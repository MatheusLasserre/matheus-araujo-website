import React from 'react'
import B9Style from '../../styles/Bloco9.module.css'
import Image from 'next/image'
import FAQ from './FAQ.js'
import Button from './Button'

function Bloco9() {
    return (
        <div>
            <div className={B9Style.contentWrap}>
                <div className={B9Style.questionWrap}>
                    <Image
                        src="/images/ROC/question.svg"
                        alt="Decoration Symbol"
                        width={42}
                        height={45}
                        className={B9Style.questionWrap}
                    />
                </div>
                <p className={B9Style.goldHead}>PERGUNTAS FREQUENTES</p>
                <FAQ
                    question="Após a compra, em quanto tempo terei acesso ao curso?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Quando as aulas começam?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Como funcionam as aulas?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="O Redescobrindo os Clássicos é para mim?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Terei contato com outros membros que assinarem o curso?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Poderei assistir as aulas pelo celular?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Tem garantia? De quanto tempo?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Quais são as formas de pagamento disponíveis?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Quanto tempo terei acesso?"
                    answer="Assim que a inscrição for feita, você receberá automaticamente o acesso ao curso por e-mail – tendo acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <div className={B9Style.spacer}></div>
                <Button></Button>
                <div className={B9Style.spacer}></div>
            </div>
            <div className={B9Style.contentWrap2}>
                <div className={B9Style.headPicWrap}>
                    <p className={B9Style.whoIs}>QUEM É MATHEUS ARAÚJO?</p>
                </div>
                <p className={B9Style.finalText}>Matheus Araújo é escritor, professor de Literatura, com mais de 5 (cinco) anos de experiência no ensino literário e foi aluno da Oficina Literária de Raimundo Carrero, uma das mais importantes oficinas literárias do Brasil.</p>
                <p className={B9Style.finalText2}>Criador do Curso Online de Literatura, conta com mais de 150 alunos, atuando diariamente com escrita literária, leitura dos clássicos, mentorias e consultorias para aspirantes a escritores, professores de literatura e toda e qualquer pessoa que queira se aprofundar no mundo dos clássicos.</p>
                <Button></Button>
            </div>

        </div>
    )
}

export default Bloco9
