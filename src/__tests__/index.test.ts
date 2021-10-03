import { Rect } from '../index';
test('use a Rect', () => {
  const r1: Rect = {
    left: 0,
    top: 0,
    width: 10,
    height: 10,
  };
  expect(r1.width).toBe(10);
});
