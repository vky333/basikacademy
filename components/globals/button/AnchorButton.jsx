import React from "react";
import Link from 'next/link'
import styles from '../button/Button.module.css'

export const AnchorButton = (props) => {
  return (
    <>
      <Link href={props.anchorLink} >
        <a className={`${styles.buttonStyle} anchorbtnStyle`}>{props.buttonName}</a>
      </Link>
    </>
  );
};

export default AnchorButton;
