import './home.css';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/example.service';
import greeting from '../../directives/greeting.directive';

export default angular.module('app.home', [randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;