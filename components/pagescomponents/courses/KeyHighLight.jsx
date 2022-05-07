import React from "react";
import styles from './Course.module.css'
import Image from 'next/image';

export const KeyHighLight = () => {
  const keyHighLight = [
    {
      id: 1,
      keyIcon: "/icons/keyHighlights/01-Blended-Conceptual.png",
      keyText: "Blended Conceptual & Application Knowledge",
    },
    {
      id: 2,
      keyIcon: "/icons/keyHighlights/02-Capstone-Projects.png",
      keyText:
        "Capstone Projects & Case- Based Studies Real World Data Sets & Learning ",
    },
    {
      id: 3,
      keyIcon: "/icons/keyHighlights/03-Linked-Learning.png",
      keyText: "Apprenticeship Linked Learning Program ",
    },
    {
      id: 4,
      keyIcon: "/icons/keyHighlights/04-BFSI-Domain.png",
      keyText: "Skills for Real Career Growth in BFSI Domain ",
    },
    {
      id: 5,
      keyIcon: "/icons/keyHighlights/05-Subject-Matter-Experts.png",
      keyText: "Learning from Industry Subject Matter Experts ",
    },
    {
      id: 6,
      keyIcon: "/icons/keyHighlights/06-Guidance-24x7.png",
      keyText: "Structured Learning Guidance 24*7 from",
    },
    {
      id: 7,
      keyIcon: "/icons/keyHighlights/07-Accounts-_-Finance.png",
      keyText: "Webinars by Accounts & Finance Professionals",
    },
    {
      id: 8,
      keyIcon: "/icons/keyHighlights/08-Career-Guidance.png",
      keyText: "Placement Assistance  & Career Guidance",
    },
    {
      id: 9,
      keyIcon: "/icons/keyHighlights/09-Communication-_-Personality.png",
      keyText: "Communication & Personality Development",
    },
  ];

  return (
    <>
      <aside className={`${styles.kyContainer}`}>
        <h1>Key Highlights</h1>
        <ul className={`${styles.keyBullets}`}>
            {keyHighLight.map(kyHihL =>
                <li key={kyHihL.id} >                    
                    <Image width={43} height={45} src={kyHihL.keyIcon} className={`${styles.keyeImg}`} alt="keyeImg"/>
                    <div className={`${styles.keyText}`}>
                        {kyHihL.keyText}
                    </div>
                </li>        
            )}
          
        </ul>
      </aside>
    </>
  );
};

export default KeyHighLight;
