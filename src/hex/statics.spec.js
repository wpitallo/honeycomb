/* eslint-env mocha */

import { expect } from 'chai'

import * as statics from './statics'

describe('Hex static methods', function() {
    describe('thirdCoordinate', function() {
        it('returns the result of -firstCoordinate - secondCoordinate', function() {
            expect(statics.thirdCoordinate(3, -1)).to.equal(-2)
        })
    })
})

describe('cubeToCartesian', () => {
    describe('when the hex has a pointy orientation', () => {
        it('converts the passed cube coordinates to rectangular coordinates', () => {
            const isPointy = true
            let cubeToCartesian = statics.cubeToCartesianFactory({ isPointy, offset: -1 })

            expect(cubeToCartesian({ q: 2, r: 1, s: -3 })).to.eql({ x: 2, y: 1 })

            cubeToCartesian = statics.cubeToCartesianFactory({ isPointy, offset: 1 })
            expect(cubeToCartesian({ q: 2, r: 1, s: -3 })).to.eql({ x: 3, y: 1 })
        })
    })

    describe('when the hex has a flat orientation', () => {
        it('converts the passed cube coordinates to rectangular coordinates', () => {
            const isPointy = false
            let cubeToCartesian = statics.cubeToCartesianFactory({ isPointy, offset: -1 })

            expect(cubeToCartesian({ q: 1, r: 1, s: -2 })).to.eql({ x: 1, y: 1 })

            cubeToCartesian = statics.cubeToCartesianFactory({ isPointy, offset: 1 })
            expect(cubeToCartesian({ q: 1, r: 1, s: -2 })).to.eql({ x: 1, y: 2 })
        })
    })
})
