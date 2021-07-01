import React from 'react'
import B9Style from '../../styles/Bloco9.module.css'
import Image from 'next/image'
import FAQ from './FAQ.js'
import Button from './Button'
import Countdown from './countdown'

function Bloco9() {
    var countDownDate = new Date("Jul 1, 2021 00:00:00").getTime();

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const hoursMinSecs = {hours:hours, minutes: minutes, seconds: seconds}

    return (
        <div>
            <div className={B9Style.flexContainer}>
            <div className={B9Style.contentWrap}>
                <div className={B9Style.questionWrap}>
                    <Image
                        src="/images/ROC/question.svg"
                        alt="Decoration Symbol"
                        width={420}
                        height={450}
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
                    answer="Nossa primeira aula acontecerá no dia 10 de Julho, mas, como dito antes, você já terá acesso instantaneamente ao Minicurso Como ler Literatura + Aulas integrais d’O Despertar e a todos os e-books"
                />
                <FAQ
                    question="Como funcionam as aulas?"
                    answer="As aulas acontecerão quinzenalmente, às quintas-feiras, 20h. Elas serão transmitidas ao vivo, com interação dos alunos, e sua gravação será disponibilizada na plataforma exclusiva do curso."
                />
                <FAQ
                    question="O Redescobrindo os Clássicos é para mim?"
                    answer="Sim, o Redescobrindo os Clássicos é para toda e qualquer pessoa, iniciante ou leitor avançado, que quer entender o poder dos clássicos e como extrair todos as transformações que eles podem proporcionar em sua vida"
                />
                <FAQ
                    question="Terei contato com outros membros que assinarem o curso?"
                    answer="Sim, através de um grupo de Telegram onde discutiremos os filmes e livros de cada mês."
                />
                <FAQ
                    question="Poderei assistir as aulas pelo celular?"
                    answer="Sim, seja ao vivo ou através do aplicativo da plataforma onde será disponibilizado o curso."
                />
                <FAQ
                    question="Tem garantia? De quanto tempo?"
                    answer="Sim, de 15 (quinze) dias, com direito à primeira aula."
                />
                <FAQ
                    question="Quais são as formas de pagamento disponíveis?"
                    answer="Temos todas as formas de pagamento possíveis. Você poderá pagar por cartão de crédito, PIX, Boleto Bancário ou até mesmo dois cartões de crédito."
                />
                <FAQ
                    question="Quanto tempo terei acesso?"
                    answer="O acesso às aulas e a todos os bônus será vitalício – apenas para os que entrarem nessa primeira turma."
                />
                <div className={B9Style.spacer}></div>
                <div>
                <Button
                    txt="QUERO GARANTIR A MINHA VAGA"
                />
                </div>
                <div className={B9Style.spacer}></div>
            </div>
            <div className={B9Style.contentWrap2}>
                <div className={B9Style.headPicWrap}>
                    <p className={B9Style.whoIs}>QUEM É MATHEUS ARAÚJO?</p>
                </div>
                <p className={B9Style.finalText}>Matheus Araújo é escritor, professor de Literatura, com mais de 5 (cinco) anos de experiência no ensino literário e foi aluno da Oficina Literária de Raimundo Carrero, uma das mais importantes oficinas literárias do Brasil.</p>
                <p className={B9Style.finalText2}>Criador do Curso Online de Literatura, conta com mais de 150 alunos, atuando diariamente com escrita literária, leitura dos clássicos, mentorias e consultorias para aspirantes a escritores, professores de literatura e toda e qualquer pessoa que queira se aprofundar no mundo dos clássicos.</p>
                {/* <Countdown hoursMinSecs={hoursMinSecs}/> */}
            </div>
            </div>
        </div>
    )
}

export default Bloco9
