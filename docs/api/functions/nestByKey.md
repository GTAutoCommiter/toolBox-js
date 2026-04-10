[**@tool-box/core**](../README.md)

---

[@tool-box/core](../README.md) / nestByKey

# Function: nestByKey()

> **nestByKey**\<`T`\>(`items`, `id?`, `link?`): `T` & `object`[]

Build a nested tree structure by key

## Type Parameters

### T

`T` _extends_ [`Nestable`](../interfaces/Nestable.md)

## Parameters

### items

`T`[]

Flat data source

### id?

`string` \| `number` \| `null`

Parent ID to start nesting from

### link?

`string` = `'parentId'`

The key used to link to the parent (default: 'parentId')

## Returns

`T` & `object`[]
