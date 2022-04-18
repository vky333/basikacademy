import React from 'react';
import styles from './HeadingContent.module.css'; 

const HeadingContent = (props) => {
    return (        
        <>       
            <h1 className={`${styles.hdingH1}`}>{props.heading}</h1>
            <p>{props.pagragraph}</p>        
                            
        </>
    )
}

export default HeadingContent;