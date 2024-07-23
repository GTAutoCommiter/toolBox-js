import { createMatrix } from "../src";

test('构建矩阵-1', () => {
  expect(createMatrix()).toEqual([[null]]);

  expect(createMatrix(1, 2)).toEqual([[null], [null]]);

  expect(createMatrix(2, 3)).toEqual([[null, null], [null, null], [null, null]]);
})