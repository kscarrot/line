import { 矩阵乘1 } from 'src/index'

describe('矩阵操作', () => {
  it('字符串矩阵乘', () => {
    expect(
      矩阵乘1(
        [
          ['a', 'b'],
          ['c', 'd'],
        ],
        [
          ['e', 'f'],
          ['g', 'h'],
        ],
      ),
    ).toStrictEqual([
      ['ae+bg', 'ce+dg'],
      ['af+bh', 'cf+dh'],
    ])
  })
})
