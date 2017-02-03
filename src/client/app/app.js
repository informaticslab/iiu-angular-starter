import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './features/home/home.module';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

angular.module('app', [uirouter, home])
  .config(routing);
