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

      <main className={styles.main}>
        <h1 className="title">
          <Link href="/first-post">
            <a>Abrantes Sistemas</a>
          </Link>
          <br/>
        </h1>
        <br/>

        <div className={styles.grid}>
          <img src="/vscode.png" width="500vh"/>
          
          <a className={styles.card}>
            <h3>Tecnologia e Inovação</h3>
            <p>Utilizamos as melhores tecnologias.</p>
          </a>

          <a className={styles.card}>
            <h3>Curso Benefício</h3>
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
