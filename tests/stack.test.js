const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('pop on stack with two or more elements returns and deletes the top element', () => {
  expect(stack.pop()).toBeDefined();
  expect(stack.pop()).toBe("wow");
  expect(stack.peek()).toBe(1);
});

test('pop on stack with one element returns and deletes that element', () => {
  expect(stack.pop()).toBeDefined();
  expect(stack.pop()).toBe(1);
  expect(stack.peek()).toBeUndefined();
});

test('pop on empty stack returns undefined', () => {
  expect(stack.pop()).toBeUndefined();
});
