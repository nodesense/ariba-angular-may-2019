import { PowerPipe } from './power.pipe';

// fdescribe - focused test
// karma executes only fdescribe
fdescribe('PowerPipe TEst suite', () => {
  // contains more than one test(s)
  it('should return default power', () => {
     const power: PowerPipe = new PowerPipe();
     // 2 ^ 1 == 2
     // expect(actual result).toBe(expected result)
     expect(power.transform(2)).toBe(2);
  });

  it('should return power of m', () => {
    const power: PowerPipe = new PowerPipe();
    // 3 ^ 2 == 9
    // expect(actual result).toBe(expected result)
    expect(power.transform(3, 2)).toBe(9);
 });

});
