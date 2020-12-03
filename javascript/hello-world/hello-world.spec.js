import  {hello, helloWithError}  from './hello-world';

describe('Hello World', () => {

  test('Say Hi', () => {
    expect(hello()).toEqual('Hello, World!');
  });

  test('Error checking 1', () => {
    // expect(abc()).toEqual('Hello, World!');
    expect(() => {helloWithError()}).toThrow(Error);
  });

  test('Error checking', () => {
    expect(() => {helloWithError()}).toThrowError();
  });

  test('Error checking 2', () => {
    expect(() => {helloWithError()}).toThrowError('Remove this statement and implement this function');
  });

  test('Error checking 3', () => {
    expect(() => {helloWithError()}).toThrowError(new Error('Remove this statement and implement this function'));
  });

  test('Error checking 4', () => {
    expect(() => {throw new Error()}).toThrowError(new Error());
  });
});
