function add(...numbers: number[]): number {
  return (numbers[0] ?? 0) + (numbers[1] ?? 0) + (numbers[2] ?? 0);
}

// test('add test', () => {
//   expect(add(1, 2)).toBe(3);
// });

const context = describe;

describe('add', () => {
  context('with no argument', () => {
    it('returns zero', () => {
      expect(add()).toBe(0);
    });
  });

  context('with only one argument', () => {
    it('returns the same number', () => {
      expect(add(2)).toBe(2);
    });
  });

  context('with two arguments', () => {
    it('returns sum of two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  context('with three arguments', () => {
    it('returns sum of three numbers', () => {
      expect(add(1, 2, 3)).toBe(6);
    });
  });
});
