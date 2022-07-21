import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from '../Course.module.css'
const CustomAccordian = (props) => {
    return (
        <Accordion defaultActiveKey={[0]} className="mainAccordion02">
            {props.contents.map((content, index) =>
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header className={styles.hdingBox}>{content.header}</Accordion.Header>
                    <Accordion.Body>
                       <span dangerouslySetInnerHTML={{__html: content.body}} />
                    </Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    )
}

export default CustomAccordian