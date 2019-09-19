import { add, hello } from './index';

describe('index', () => {
  it('should return hello', () => {
    expect(hello()).toEqual('hello');
  });
  it('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
