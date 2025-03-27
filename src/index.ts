type 矩阵元 = number | string
type 向量 = 矩阵元[]
type 矩阵 = 向量[]

const 元素加 = (a: 矩阵元, b: 矩阵元) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  const aStr = a.toString()
  const bStr = b.toString()
  if (aStr && bStr) return `${aStr}+${bStr}`
  return `${aStr}${bStr}`
}

const 元素乘 = (a: 矩阵元, b: 矩阵元) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  }
  const aStr = a.toString()
  const bStr = b.toString()
  return `${aStr}${bStr}`
}

const 向量乘 = (a: 向量, b: 向量) => {
  return a.map((a, i) => 元素乘(a, b[i])).reduce((prev, curr) => 元素加(prev, curr), '')
}

const 行 = (matrix: 矩阵, index: number) => {
  if (index >= matrix.length) throw Error('序数超过矩阵范围')

  return matrix[index]
}

const 列 = (matrix: 矩阵, index: number) => {
  if (index >= matrix.length) throw Error('序数超过矩阵范围')

  const result: 矩阵元[] = []

  matrix.forEach((row) => {
    result.push(row[index])
  })

  return result
}

const 转置 = (matrix: 矩阵) => {
  const result: 矩阵 = []

  for (let i = 0; i < matrix[0].length; i++) {
    const column = 列(matrix, i)
    result.push(column)
  }

  return result
}

export const 矩阵乘1 = (a: 矩阵, b: 矩阵) => 转置(a.map((行) => 转置(b).map((列) => 向量乘(行, 列))))
