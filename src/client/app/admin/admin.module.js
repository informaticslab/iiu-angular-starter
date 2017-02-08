import AdminController from './admin.controller';
import routing from './admin.routes';

export default angular.module('app.admin', [])
  .config(routing)
  .controller('AdminController', AdminController)
  .name;