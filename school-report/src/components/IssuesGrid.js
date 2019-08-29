import React, { useState, useEffect } from 'react';
import Issue from './Issue';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios'

function IssuesGrid() {
  const [issues, setIssues] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    axiosWithAuth()
    .get('https://irsr-be-dev.herokuapp.com/issues')
    .then(res => {
      // console.log(res.data);
      setIssues(res.data);
      console.log(res)
  })
  .catch(res => {
    console.log('Error', res);
  });
  }, []);

  useEffect(() => {
    axios.get('https://irsr-be-dev.herokuapp.com/public/issue-status')
      .then( res => setStatusList(res.data))
      .catch( err => console.log(err))
  }, []);

  const statusDrop = statusList.map( (status) => {
    return (
      <option key={status.name} value={status.id}>{status.name}</option>
    )
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(sortBy)
  }

  const handleChange = (ev) => {
    setSortBy(ev.target.value);
  }
  //
  if (localStorage.getItem('token')) {

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <select name='status' onChange={(ev) => handleChange(ev)}>
            <option>Sort by Issue Status</option>
            {statusDrop}
          </select>
          <button type='submit'>Sort</button>
        </form>
        {issues.map(issue => {
          if (issue.status_id == sortBy) {
          return <Issue obj={issue} key={issue.id} />;
          }
        })}
      </div>
    );
  } else {
    return <div>Please Login...</div>;
  }
}

export default IssuesGrid;
