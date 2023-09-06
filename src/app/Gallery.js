"use client";

import { useEffect, useState } from 'react';
import { Contestant } from './CurrentContestant'
import styles from './page.module.css'
import { allContestants } from './contestants';

const sample = (array, n) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, Math.min(n, array.length));

  return selected;
}


export function Gallery() {

  const [displayedContestants, setDisplayedContestants] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (allContestants.length > 3) {
        setDisplayedContestants(sample(allContestants, 3));
      } else {
        setDisplayedContestants(allContestants);
      }
    }, 30_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div>
          Gallerie
        </div>
      </header>
      
      <ul className={styles.gallery}>
        {displayedContestants?.map((contestant, index) => (
          <li key={index} >
            <Contestant contestant={contestant} preview/>
          </li>
        ))}
      </ul>
    </>
  )
}