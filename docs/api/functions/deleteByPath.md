[**@tool-box/core**](../README.md)

---

[@tool-box/core](../README.md) / deleteByPath

# Function: deleteByPath()

> **deleteByPath**(`obj`, `path`, `splitStr?`): `any`

Delete a property from an object using a path string or array

## Parameters

### obj

`any`

The source object

### path

`string` \| `string`[]

The path to the property to delete (e.g., 'a.b.c' or ['a', 'b', 'c'])

### splitStr?

`string` = `'.'`

The character used to split the path string (default: '.')

## Returns

`any`

The modified source object (note: modifies object in place for the first level, shallow copies for deeper levels depending on implementation)
