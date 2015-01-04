'use strict';

describe('productManagement.version module', function() {
  beforeEach(module('productManagement.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
