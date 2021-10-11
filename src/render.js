const formatRow = cells =>
  cells.map(value => (value ? 'o'.green : '.'.gray)).join(' ')

export const render = board =>
  board
    .reduce((newBoard, { x, y, value }) => {
      if (!Array.isArray(newBoard[y])) newBoard[y] = []
      newBoard[y][x] = value
      return newBoard
    }, [])
    .map(formatRow)
    .join('\n')
