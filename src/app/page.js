import ContestantName from '@/contest/template/ContestantName'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          {"Compétition de CSS à l'aveugle"}
        </div>

        <div>
          30 ans Alisé
        </div>
      </div>
      
      <div className={styles.canvas}>
        <ContestantName />
      </div>
    </main>
  )
}
