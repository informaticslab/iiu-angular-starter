describe('Admin', () => {
  describe('Admin Controller', () => {
    let controller;

    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(($controller) => {
        controller = $controller('AdminController', {});
      });
    });

    it('should contain name property', () => {
      expect(controller.name).toBe('Admin');
    });

    it('should contain greeting property', () => {
      expect(controller.greeting).toBe('Welcome, ');
    });
  });
});

