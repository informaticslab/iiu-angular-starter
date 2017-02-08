export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'Team';
    this.url = 'https://www.phiresearchlab.org/';
  }

  randomName() {
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randomNames']; 