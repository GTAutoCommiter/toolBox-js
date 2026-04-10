/**
 * Build a nested tree structure from a flat array
 */
export interface Nestable {
  id: string | number;
  [key: string]: any;
}

/**
 * Build a nested tree structure by key
 * @param items - Flat data source
 * @param id - Parent ID to start nesting from
 * @param link - The key used to link to the parent (default: 'parentId')
 */
export function nestByKey<T extends Nestable>(
  items: T[],
  id: string | number | null = null,
  link: string = "parentId",
): (T & { children: any[] })[] {
  return items
    .filter((item) => item[link] === id)
    .map((item) => ({
      ...item,
      children: nestByKey(items, item.id, link),
    }));
}

export default nestByKey;
