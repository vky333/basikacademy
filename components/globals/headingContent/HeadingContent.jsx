import React from 'react';
import styles from './HeadingContent.module.css'; 

const HeadingContent = (props) => {
    return (        
        <>       
            <h1 dangerouslySetInnerHTML={{__html: props.heading}} className={`${styles.hdingH1}`}></h1>
            <p dangerouslySetInnerHTML={{__html: props.pagragraph}}></p>            
                 
                            
        </>
    )
}

export default HeadingContent;