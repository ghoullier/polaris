import { describe, it, expect, beforeEachProviders, inject } from 'angular2/testing';
import { PolarisApp as App } from '../app/polaris';

beforeEachProviders(() => [App]);

describe('App: Volunteers', () => {
  it('should have the `defaultMeaning` as 42', inject([App], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([App], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});
