export const identity = i => i
export const all = func => coll => coll.map(func)
export const map = func => values => values.map(func)
export const rand = () => Math.random() < 0.5
