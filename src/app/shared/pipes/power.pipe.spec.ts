import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe test suit', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return power of 2', () => {
    const pipe = new PowerPipe();
    // expect(actual).toBe(expected)
    expect(pipe.transform(2)).toBe(2);
    expect(pipe.transform(2, 1)).toBe(2);
    expect(pipe.transform(2, 2)).toBe(4);
  });
});
