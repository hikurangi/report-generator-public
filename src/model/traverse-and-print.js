const dataTree = require('./pronouns')
const dict = new Map()

const mapFromTree = (tree, path = '', key = '') => {
  // possibly unnecessary
  if (!Boolean(tree)) throw new Error(`Tree is invalid, it looks like this: ${tree}`)
  // base case
  // if the tree is defined and not an object
  if (typeof tree !== 'object') {
    console.log({path, tree})
    // won't be correct if JSON itself is a leaf
    dict.set(path, tree)
  } else {
    Object.keys(tree).forEach(child => path === ''
      ? mapFromTree(tree[child], child, child) 
      : mapFromTree(tree[child], `${path}_${child}`, child))
  }
}

flattenTree(dataTree)

console.log(dict)