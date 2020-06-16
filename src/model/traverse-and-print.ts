// import { ReportNode } from '../types'

// const dataTree = {} // require('./pronouns')
// const flattened = new Map()

// const mapFromTree = (tree: JSON, path = '', key = '') => {

//   // possibly unnecessary
//   if (!Boolean(tree)) throw new Error(`Tree is invalid, it looks like this: ${tree}`)

//   // base case
//   // if the tree is defined and not an object
//   if (typeof tree !== 'object') {


// 1    flattened.set(path, tree)

//   } else {

//     Object.keys(tree).forEach(child => path === ''
//       ? mapFromTree(tree[child], child, child) 
//       : mapFromTree(tree[child], `${path}_${child}`, child))

//   }
// }

// mapFromTree(dataTree)

// console.log(flattened)