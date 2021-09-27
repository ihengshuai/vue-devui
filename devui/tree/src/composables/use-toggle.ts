import { ref } from 'vue'

export default function useToggle(data: unknown): any {
  const openedTree = (tree) => {
    return tree.reduce((acc, item) => (
      item.open
        ? acc.concat(item, openedTree(item.children))
        : acc.concat(item)
    ), [])
  }

  const openedData = ref(openedTree(data))

  const toggle = (item) => {
    console.log('toggle', item, item.id, item.open);
    item.open = !item.open
    openedData.value = openedTree(data)
  }

  return {
    openedData,
    toggle,
  }
}
