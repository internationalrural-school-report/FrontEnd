import React, { useState } from 'react';
import Modal from 'react-animated-modal';
import DeleteButton from './DeleteButton';

const SingleIssuePage = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        visible={showModal}
        closemodal={() => setShowModal(false)}
        type='flipInX'
      >
        <div>{props.props.obj.name}</div>
        <div>{props.props.obj.comments}</div>
        <div>{props.props.obj.created_at}</div>
        <div>{props.props.obj.org_name}</div>
        <div>{props.props.obj.created_by}</div>
        <div>{props.props.obj.updated_at}</div>
        <div>{props.props.obj.updated_by}</div>
        <div>{props.props.obj.status_name}</div>
        <button onClick={() => DeleteButton(props)}>Delete Issue</button>
      </Modal>
      <div onClick={() => setShowModal(true)}>More Information</div>
    </div>
  );
};

export default SingleIssuePage;
