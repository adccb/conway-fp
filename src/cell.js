import { identity, all } from './util.js'

export const cell = (value, x, y) => ({ value, x, y })
export const isAlive = ({ value }) => Boolean(value)
export const is = (cell1, cell2) =>
  cell2 ? cell1.x === cell2.x && cell1.y === cell2.y : cell2 => is(cell1, cell2)

export const survives = neighbors =>
  [2, 3].includes(neighbors.filter(isAlive).length)
export const resurrects = neighbors => neighbors.filter(isAlive).length === 3

export const tick = (cell, neighbors) => ({
  ...cell,
  value: cell ? survives(neighbors) : resurrects(neighbors),
})
