class RandomNames {

  constructor() {
    this.names = ['Tom', 'Mary', 'Peter', 'Kristin', 'Michael', 'Jason', 'Greg', 'Sanjith', 'Trung', 'Dale', 'Jai', 'KB'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;

