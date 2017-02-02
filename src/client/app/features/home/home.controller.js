export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'Team';
  }

  randomName() {
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randomNames'];