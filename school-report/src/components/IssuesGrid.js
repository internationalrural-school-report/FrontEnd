import React, { useState, useEffect } from 'react';
import Issue from './Issue';
import { axiosWithAuth } from './axiosWithAuth';

function IssuesGrid() {
  const [issues, setIssues] = useState([]);

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
  }, [])

  //
  if (localStorage.getItem('token')) {

    return (
      <div>
        {issues.map(issue => {
          return <Issue obj={issue} key={issue.id} />;
        })}
      </div>
    );
  } else {
    return <div>Please Login...</div>;
  }
}

export default IssuesGrid;
