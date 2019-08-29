import React from 'react';
import SingleIssuePage from './SingleIssuePage'

function Issue(props) {
  return (
    <div>
      <h3>Name: {props.obj.name}</h3>
      <h3>Created At: {props.obj.created_at}</h3>
      <h3>Created By: {props.obj.created_by}</h3>
      <p>Comments: {props.obj.comments}</p>
      <SingleIssuePage props={props}/>
    </div>
  );
}

export default Issue;
