import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abrantes Sistemas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.triangle}></div>

      <main className={styles.main}>
        <div className={styles.top}>
          <h1 className={styles.title}>Abrantes Sistemas</h1>
          <h3 className={styles.description}>Desenvolvimento de Software</h3>
        </div>
        <br />

        <div className={styles.grid}>
          <img className={styles.img} src="/vscode.png" />

          <a className={styles.card}>
            <h3>Tecnologia e Inovação</h3>
            <p>Utilizamos as melhores tecnologias.</p>
          </a>

          <a className={styles.card}>
            <h3>Automatize seus processos</h3>
            <p>Preços compativeis com o mercado.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>Powered by Abrantes Sistemas</a>
      </footer>
    </div>
  )
}
