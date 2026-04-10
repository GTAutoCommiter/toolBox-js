[**@tool-box/core**](../README.md)

---

[@tool-box/core](../README.md) / cloneDeep

# Variable: cloneDeep

> `const` **cloneDeep**: `object`

Deep clone an object or array

## Type Declaration

### byJSON()

> **byJSON**\<`T`\>(`val`): `T`

Deep clone using JSON serialization
Note: Cannot clone undefined, function, symbol, etc.

#### Type Parameters

##### T

`T`

#### Parameters

##### val

`T`

#### Returns

`T`

### byRecursive()

> **byRecursive**\<`T`\>(`obj`): `T`

Deep clone using recursion

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`T`

#### Returns

`T`
