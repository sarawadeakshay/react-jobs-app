import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import jobsData from '../mock-data/jobs.json';
import './Jobs.css';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const Jobs = () => {
  const [jobs] = useState(jobsData);
  const classes = useStyles();

  return (
    <div className="main-container">
      <div className="table-container">
        <h4 className="job-count">Job Count - {jobs.length}</h4>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map(job => (
                <StyledTableRow key={job.id}>
                  <StyledTableCell>{job.id}</StyledTableCell>
                  <StyledTableCell>{job.title}</StyledTableCell>
                  <StyledTableCell>{job.description}</StyledTableCell>
                  <StyledTableCell>{job.employment_type}</StyledTableCell>
                  <StyledTableCell>
                  <NavLink to={`/job-detail/${job.id}`}>
                    <Button variant="contained" color="secondary" >
                      View Details
                    </Button>
                  </NavLink>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
