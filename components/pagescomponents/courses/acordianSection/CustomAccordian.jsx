import React from 'react'
import { Accordion } from 'react-bootstrap'

const CustomAccordian = (props) => {
    return (
        <Accordion defaultActiveKey={[0]}>
            {props.contents.map((content, index) =>
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>{content.header}</Accordion.Header>
                    <Accordion.Body>
                       {content.body}
                    </Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    )
}

export default CustomAccordian