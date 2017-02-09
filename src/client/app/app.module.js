import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import angular from 'angular';

import Home from './home/home.module';
import Admin from './admin/admin.module';
import Core from './core/core.module';

angular.module('app', [Core, Admin, Home]);

