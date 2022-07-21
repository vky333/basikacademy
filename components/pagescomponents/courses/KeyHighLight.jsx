import React from "react";
import styles from './Course.module.css'
import Image from 'next/image';
import Link from "next/link";

export const KeyHighLight = () => {
  const keyHighLight = [
    {
      id: 1,
      keyIcon: "/icons/keyHighlights/01-Blended-Conceptual.png",
      keyText: `Blended Conceptual & Application 
      Knowledge`,
    },
    {
      id: 2,
      keyIcon: "/icons/keyHighlights/02-Capstone-Projects.png",
      keyText:`Capstone Projects & Case- Based
      Studies – Real World Data Sets
      & Learning`,
    },
   
    {
      id: 4,
      keyIcon: "/icons/keyHighlights/04-BFSI-Domain.png",
      keyText: `Skill Enhancement to make youth employable`,
    },
    {
      id: 5,
      keyIcon: "/icons/keyHighlights/05-Subject-Matter-Experts.png",
      keyText: `Learning from Industry Subject
      Matter Experts
      `,
    },
    
    {
      id: 7,
      keyIcon: "/icons/keyHighlights/07-Accounts-finance.png",
      keyText: `Webinars by Accounts & Finance 
      Professionals`,
    },
    {
      id: 8,
      keyIcon: "/icons/keyHighlights/08-Career-Guidance.png",
      keyText: `100% Placement Guarantee*`,
    },
    {
      id: 9,
      keyIcon: "/icons/keyHighlights/09-Communication-personality.png",
      keyText: `Communication & Personality 
      Development`,
    },
    {
      id: 10,
      keyIcon: "/icons/keyHighlights/10-BFSI-SSC-Certified-Trainers.png",
      keyText: `BFSI SSC certified trainers`,
    }
  ];

  return (
    <>
      <aside className={`${styles.kyContainer}`}>
        <h2>Key Highlights</h2>
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
      
        <Link href="/"><a className={`${styles.termCond}`}>* conditions apply</a></Link>
     
      </aside>
    </>
  );
};

export default KeyHighLight;
