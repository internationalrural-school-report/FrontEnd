import React, { useState, useEffect } from 'react';
import Issue from './Issue';
import { axiosWithAuth } from './axiosWithAuth';

function IssuesGrid() {
  const [issues, setIssues] = useState([]);

  //
  if (localStorage.getItem('token')) {
    axiosWithAuth()
      .get('https://irsr-be-dev.herokuapp.com/issues')
      .then(res => {
        // console.log(res.data);
        setIssues(res.data);
      })
      .catch(res => {
        console.log('Error', res);
      });

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
