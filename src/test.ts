import { defineGrid, extendHex, Grid, Hex, HexFactory } from './honeycomb'

interface CustomHex {
    custom: string
}

const Hex = extendHex<CustomHex>({ custom: 'hi' })
const GridFactory = defineGrid(Hex)
// const c = GridFactory.rectangle({ width: 1, height: 1 })
const c = GridFactory(Hex({ custom: 'derp' }))
const d = c[0].x
const e = c.map(hex => hex.x)
e[0] = 1

class Derp {
    grid: Grid<Hex<CustomHex>>
    hex: HexFactory

    constructor(grid) {
        this.grid = grid
    }
}

const a = new Derp(GridFactory())
const b = a.grid[0].x
