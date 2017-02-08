import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';

import Home from './home/home.module';
import Admin from './admin/admin.module';
import Core from './core/core.module';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

angular.module('app', [uirouter, Admin, Home, Core])
  .config(routing);
