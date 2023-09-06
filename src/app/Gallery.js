"use client";

import React, { useEffect, useState } from 'react';
import { Contestant, allContestants } from './CurrentContestant'
import styles from './page.module.css'

const sample = (array, n) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, n);

  return selected;
}

const initialValue = sample(allContestants, 3);


export function Gallery() {

  const [displayedContestants, setDisplayedContestants] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedContestants(sample(allContestants, 3));
    }, 5_000);

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