import uirouter from 'angular-ui-router';
import routing from './config';

export default angular.module('app.core', [uirouter])
  .config(routing)
  .name;