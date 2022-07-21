import React from 'react'
import { Modal } from 'react-bootstrap'

const VideoModalContent = (props) => {
    return (
        <Modal.Body>
            <video src={props.videoSRC} width="100%" controls autoPlay />
        </Modal.Body>
    )
}

export default VideoModalContent