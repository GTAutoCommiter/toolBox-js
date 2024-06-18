import { nestByKey } from "../src";

test('测试nestByKey', () => {
  const comments = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 4 }
  ];
  expect(nestByKey(comments)).toEqual([
    {
      id: 1,
      parentId: null,
      children: [
        {
          id: 2,
          parentId: 1,
          children: [
            {
              id: 4,
              parentId: 2,
              children: [
                {
                  id: 5,
                  parentId: 4,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 3,
          parentId: 1,
          children: []
        }
      ]
    }
  ]);
})