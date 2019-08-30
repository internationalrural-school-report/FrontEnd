import React from 'react';
import SingleIssuePage from './SingleIssuePage';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 30%;
  box-sizing: border-box;
  padding: 10px;
  border: 3px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StyledH3 = styled.h3`
  font-size: 0.75rem;
`;

const StyledP = styled.p`
  font-size: 0.6rem;
`;

function Issue(props) {
  return (
    <StyledDiv>
      <StyledH3>Name: {props.obj.name}</StyledH3>
      <StyledH3>Created At: {props.obj.created_at}</StyledH3>
      <StyledH3>Created By: {props.obj.created_by}</StyledH3>
      <StyledP>Comments: "{props.obj.comments}"</StyledP>
      <SingleIssuePage props={props} />
    </StyledDiv>
  );
}

export default Issue;
