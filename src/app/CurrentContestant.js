"use client";

import { allContestants } from './contestants';
import styles from './page.module.css'

export function Contestant({contestant, preview = false}) {
  return (
    <div>
      {contestant.Component}
      {!preview && (
        <div className={styles.smallFooter}>
          <span>{contestant.name}</span>
          <span>{contestant.promo}</span>
        </div>
      )}
    </div>
  )
}

export default function CurrentContestant() {
  const current = allContestants[0];

  return <Contestant contestant={current} />
}
