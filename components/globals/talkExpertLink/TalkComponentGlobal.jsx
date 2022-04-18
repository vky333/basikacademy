import React from "react";
import {Button, section} from 'react-bootstrap';

export const TalkComponentGlobal = (props) =>{
    return(
    <>
        <section className='talkExpertLink'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <h1>{props.Heading}</h1>
                        <Button variant="primary" size="lg" className="talkexpert-btn">{props.Button}</Button>
                    </div>
                </div>
            </div>
        </section>
    </>


    )
}

export default TalkComponentGlobal;