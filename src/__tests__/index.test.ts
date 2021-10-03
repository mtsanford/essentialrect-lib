import { Rect, fitRect } from '../index';
test('use a Rect', () => {
  const r1: Rect = {
    left: 0,
    top: 0,
    width: 10,
    height: 10,
  };
  expect(r1.width).toBe(10);
});

test('fit a Rect', () => {
  const imageRect: Rect = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };
  const essentialRect: Rect = {
    left: 20,
    top: 20,
    width: 60,
    height: 20,
  };
  const clientRect: Rect = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };
  const displayRect = fitRect(imageRect, essentialRect, clientRect);
  console.log(displayRect);
  expect(imageRect.width).toBe(100);
});
