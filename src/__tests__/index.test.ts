import { printMsg } from '../index';
test('printMsg', () => {
  expect(printMsg()).toBe('This is a message from the demo package');
});
