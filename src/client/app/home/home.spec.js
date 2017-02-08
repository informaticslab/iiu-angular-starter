describe('Home', () => {
  describe('Home Controller', () => {
    let controller;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($controller) => {
        controller = $controller('HomeController', {});
      });
    });

    it('should contain default name "Team"', () => {
      expect(controller.name).toBe('Team');
    });
  });
});