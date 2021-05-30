import Head from 'next/head'
import styles from '../styles/o-despertar-inscricao.module.css'
import Image from 'next/image'

export default function getStaticprops() {
  return (
    <div>
        <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O Despertar</title>
        </Head>
        <div className={styles.body}>
            <section className={ styles.hero }>
                <div className={ styles.logoContainer }>
                    <img src="/images/home-logo.png" alt="logo" className={ styles.logo } />
                    <h1 className={ styles.headline }>Esqueça tudo o que a escola te ensinou sobre Literatura.</h1>
                </div>
                <div className={ styles.container }>
                    <div className={ styles.textWrap }>
                        <p className={ styles.firstParagraph }>Da escola à Grande Mídia, você foi ensinado a desprezar – e até mesmo odiar – os clássicos da
                            Literatura. 
                        </p>   
                        <p className={ styles.secondParagraph }>
                            O que não te contaram é que os clássicos podem te ajudar a amadurecer, fortificar a sua 
                            personalidade, expandir o seu horizonte de consciência e educar a sua imaginação.
                        </p>
                        <p className={ styles.thirdParagraph }>
                            Evento <span className={styles.strong}>100% online</span> e <span className={styles.strong}>100% gratuito</span>.
                        </p>
                        <div className={ styles.dateBtn + ' ' + styles.strong }>de 31/05 a 02/06</div>
                        <p className={ styles.textCta }>Preencha o formulário abaixo e prepare-se. <span className={styles.strong + ' ' + styles.strongline}>Chegou a hora de despertar.</span></p>
                        <div className={ styles.formWrap }>
                            <form method="POST" action="https://matheusaraujo.activehosted.com/proc.php" className={styles.mainForm} id="_form_1_">
                                <input type="hidden" name="u" defaultValue={1} />
                                <input type="hidden" name="f" defaultValue={1} />
                                <input type="hidden" name="s" />
                                <input type="hidden" name="c" defaultValue={0} />
                                <input type="hidden" name="m" defaultValue={0} />
                                <input type="hidden" name="act" defaultValue="sub" />
                                <input type="hidden" name="v" defaultValue={2} />
                                <div>
                                    <label htmlFor="fullname" className={styles.label}>Seu Nome</label>
                                    <input type="text" className={styles.input} id="fullname" name="fullname" placeholder="Nome" title="Por favor, insira seu nome" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className={styles.label}>Seu E-mail</label>
                                    <input type="text" className={styles.input} id="email" name="email" placeholder="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Por favor, corrija o e-mail" required />
                                </div>
                                <div id="joke">
                                    <button type="submit" id="_form_1_submit" className={styles.btnCta}>quero participar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

  )
}
