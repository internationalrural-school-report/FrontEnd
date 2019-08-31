import React, { useState, useEffect } from 'react';
import Issue from './Issue';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 900px;
  margin: 20px auto;
`;

function IssuesGrid() {
  const [issues, setIssues] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [sortBy, setSortBy] = useState('all');

  useEffect(() => {
    axiosWithAuth()
      .get('https://irsr-be-dev.herokuapp.com/issues')
      .then(res => {
        // console.log(res.data);
        setIssues(res.data);
        console.log(res);
      })
      .catch(res => {
        console.log('Error', res);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://irsr-be-dev.herokuapp.com/public/issue-status')
      .then(res => setStatusList(res.data))
      .catch(err => console.log(err));
  }, []);

  const statusDrop = statusList.map(status => {
    return (
      <option key={status.name} value={status.id}>
        {status.name}
      </option>
    );
  });

  const handleChange = ev => {
    setSortBy(ev.target.value);
  };
  //
  if (localStorage.getItem('token')) {
    return (
      <div>
        <form>
          <select name='status' onChange={ev => handleChange(ev)}>
            <option>Sort by Issue Status</option>
            <option value='all'>All</option>
            {statusDrop}
          </select>
        </form>
        <StyledDiv className='Heart-IMG'>
          {issues.map(issue => {
            if (issue.status_id == sortBy || sortBy === 'all') {
              return <Issue obj={issue} key={issue.id} />;
            }
          })}
        </StyledDiv>
      </div>
    );
  } else {
    return <div style={{ color: 'red' }}>Please Login...</div>;
  }
}

export default IssuesGrid;
