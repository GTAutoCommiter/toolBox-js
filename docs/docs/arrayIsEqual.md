---
title: arrayIsEqual
sidebar_label: arrayIsEqual
---

import {arrayIsEqual} from '../../src/arrayIsEqual';

判断两个数组是否相等（元素相同，顺序无关）

## 使用示例 

```typescript
import arrayIsEqual from 'toolBox-js/arrayIsEqual';

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
console.log(arrayIsEqual(arr1, arr2)); // true