import { cell, is, tick as cellTick } from './cell.js'
import { map, rand } from './util.js'

const isNeighbor = (target, cell) =>
  [target.x - 1, target.x, target.x + 1].includes(cell.x) &&
  [target.y - 1, target.y, target.y + 1].includes(cell.y)

export const board = (x = 30, y = 30) =>
  Array.from({ length: y }, (_, cellY) =>
    Array.from({ length: x }, (_, cellX) =>
      cell(Boolean(rand()), cellX, cellY),
    ),
  ).flat()

export const findNeighbors = (target, board) =>
  board.filter(cell => (is(cell, target) ? false : isNeighbor(target, cell)))

export const tick = board =>
  board.map(cell => cellTick(cell, findNeighbors(cell, board)))
