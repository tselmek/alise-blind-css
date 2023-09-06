import styles from './page.module.css'
import CurrentContestant from './CurrentContestant'
import { Gallery } from './Gallery'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            {"Compétition de CSS à l'aveugle"}
          </div>

          <div>
            30 ans Alisé
          </div>
        </header>
        
        <div className={styles.canvas}>
          <CurrentContestant />
        </div>

        <footer className={styles.footer}>
          <span>Made with ❤️ and ✨ by Antoine Jésus for Alisé</span>
        </footer>
      </main>

      <aside className={styles.sidebar}>
        <Gallery />
      </aside>
    </>
  )
}
