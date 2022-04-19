import React from "react";
import Image from 'next/image';
export const LogoImage = (props) =>{
    return(
        <Image width={130} height={60} src={props.logoCard.logoImg} alt="logo"/>
    )
}

export default LogoImage;


