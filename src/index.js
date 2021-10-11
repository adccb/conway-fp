import colors from 'colors'

import { board, tick } from './board.js'
import { render } from './render.js'

const [command] = process.argv.slice(2)
let game = board(30, 65)

if (command === 'iterative') {
  setInterval(() => {
    game = tick(game)
    const rendered = render(game)
    console.log('\x1Bc')
    setTimeout(() => process.stdout.write(rendered), 30)
  }, 500)
}
