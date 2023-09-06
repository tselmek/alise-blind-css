import styles from './page.module.css'
import ContestantName from "@/contest/template/ContestantName";

export const allContestants = [
  {
    name: 'John',
    promo: '2021',
    Component: ContestantName
  },
  {
    name: 'Stark',
    promo: '1998',
    Component: ContestantName
  },
  {
    name: 'Fidji',
    promo: '2004',
    Component: ContestantName
  },
  {
    name: 'Billy',
    promo: '1993',
    Component: ContestantName
  },
  {
    name: 'Stark',
    promo: '1998',
    Component: ContestantName
  },
  {
    name: 'Fidji',
    promo: '2004',
    Component: ContestantName
  },
  {
    name: 'Billy',
    promo: '1993',
    Component: ContestantName
  },
]

export function Contestant({contestant, preview = false}) {
  return (
    <div>
      <contestant.Component/>
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
  const current = allContestants.at(-1);

  return <Contestant contestant={current} />
}
