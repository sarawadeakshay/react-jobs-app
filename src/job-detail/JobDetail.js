import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import jobsData from '../mock-data/jobs.json';
import './JobDetail.css';

export const JobDetail = ({ match }) => {
  const selectedJobId = +match.params.id;
  const jobs = Array.isArray(jobsData) ? jobsData : [];
  const selectedJob = jobs.filter(job => job.id === selectedJobId);
  const errMsg = "No matching job found!";
  const columnMap = {
    Id: "id",
    Title: "title",
    Description: "description",
    Type: "employment_type"
  };
  return (
    <div className="main-container">
      <div className="header">
        <h2 className="job-title">{selectedJob.length ? selectedJob[0].title : errMsg}</h2>
        <NavLink to='/jobs'>
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </NavLink>
      </div>
      <div className="job-detail">
        {selectedJob.length && Object.keys(columnMap).map(key => (
          <div className="job-field" key={key}>
            <span className="key">{key}:</span>
            <span className="value">{selectedJob[0][columnMap[key]]}</span>
          </div>
        ))}
        <Button variant="contained" className="apply-btn">
          Apply
        </Button>
      </div>
    </div>
  );
};
