import { cell, isAlive, survives, resurrects, tick } from '../cell'
import { map } from '../util'

const neighbors = map(cell)

it('constructs a cell', () => expect(cell(true).value).toBe(true))

it('survives when it should', () =>
  expect(survives(neighbors([true, true]))).toBe(true))

it('dies when it should', () => expect(survives(neighbors([]))).toBe(false))

it('resurrects when it should', () =>
  expect(resurrects(neighbors([true, true, true]))).toBe(true))

it('stays dead when it should', () =>
  expect(resurrects(neighbors([]))).toBe(false))
