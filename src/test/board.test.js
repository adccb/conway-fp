import { board, findNeighbors, tick } from '../board'
import { cell, is } from '../cell'
import { render } from '../render'

const t = true
const f = false

describe('board', () => {
  const x = 21
  const y = 24

  it('generates correctly', () => expect(board(x, y).length).toBe(x * y))

  it('ticks correctly', () => {
    const gameBoard = [
      [t, f, t, t, f, t].map((value, x) => cell(value, x, 0)),
      [f, t, f, t, t, f].map((value, x) => cell(value, x, 1)),
      [t, t, t, f, t, f].map((value, x) => cell(value, x, 2)),
    ].flat()

    const expectedNextTick = [
      { value: false, x: 0, y: 0 },
      { value: true, x: 1, y: 0 },
      { value: true, x: 2, y: 0 },
      { value: true, x: 3, y: 0 },
      { value: false, x: 4, y: 0 },
      { value: false, x: 5, y: 0 },
      { value: false, x: 0, y: 1 },
      { value: false, x: 1, y: 1 },
      { value: false, x: 2, y: 1 },
      { value: false, x: 3, y: 1 },
      { value: false, x: 4, y: 1 },
      { value: true, x: 5, y: 1 },
      { value: true, x: 0, y: 2 },
      { value: true, x: 1, y: 2 },
      { value: true, x: 2, y: 2 },
      { value: false, x: 3, y: 2 },
      { value: true, x: 4, y: 2 },
      { value: true, x: 5, y: 2 },
    ]

    expect(
      tick(gameBoard).every(
        cell => expectedNextTick.find(is(cell)).value === cell.value,
      ),
    ).toBe(true)
  })
})
