import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Jobs } from './jobs/Jobs';
import { JobDetail } from './job-detail/JobDetail';
import { PageNotFound } from './page-not-found/PageNotFound';

export function Main() {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Jobs}/>
        <Route exact path='/jobs' component={Jobs}/>
        <Route path='/job-detail/:id' component={JobDetail}/>
        <Route path='*' component={PageNotFound}/>
       </Switch>
    </div>
  );
}