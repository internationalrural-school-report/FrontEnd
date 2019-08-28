import React, {useState} from 'react';
import Modal from 'react-animated-modal'

const SingleIssuePage = () => {
    const [showModal, setShowModal] = useState(false);

        return (
            <div>
                <Modal
                    visible={showModal}
                    closemodal={() => setShowModal(false)}
                    type="flipInX"
                >
                    <div>Issue Name</div>
                    <div>Issue description</div>
                    <div>Organization name</div>
                    <div>Status</div>
                    <div>Created by</div>
                    <div>Created at</div>
                    <div>Updated by</div>
                    <div>Updated at</div>
                </Modal>
                <div onClick={() => setShowModal(true)}>
                    More Information
                </div>
            </div>
        );

}

export default SingleIssuePage