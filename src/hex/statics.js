import { offsetFromZero } from '../utils'

/**
 * Calculates the third cube coordinate from the other two. The sum of all three coordinates must be 0.
 *
 * @memberof Hex
 * @static
 * @method
 *
 * @param {number} firstCoordinate  The first other cube coordinate.
 * @param {number} secondCoordinate The second other cube coordinate.
 *
 * @returns {number}                The third cube coordinate.
 *
 * @example
 * const Hex = Honeycomb.extendHex()
 * Hex.thirdCoordinate(3, -2)   // -1
 */
export function thirdCoordinate(firstCoordinate, secondCoordinate) {
    return -firstCoordinate - secondCoordinate
}

export function cubeToCartesianFactory({ isPointy, offset }) {
    /**
     * @memberof Hex
     * @static
     * @method
     *
     * @param {Object} cubeCoordinates      Cube coordinates (`s` isn't required).
     * @param {number} cubeCoordinates.q    The `q` cube coordinate.
     * @param {number} cubeCoordinates.r    The `r` cube coordinate.
     *
     * @returns {point}                     `x` and `y` coordinates.
     *
     * @example
     * const Hex = Honeycomb.extendHex()
     *
     * Hex.cubeToCartesian({ q: 1, r: 2, s: -3 })   // { x: 2, y: 2 }
     *
     * // the `s` coordinate isn't required:
     * Hex.cubeToCartesian({ q: -3, r: 5 })         // { x: -1, y: 5 }
     */
    return function cubeToCartesian({ q, r }) {
        return isPointy
            ? { x: q + offsetFromZero(offset, r), y: r }
            : { x: q, y: r + offsetFromZero(offset, q) }
    }
}

export function cartesianToCubeFactory({ isPointy, offset }) {
    /**
     * @memberof Hex
     * @static
     * @method
     *
     * @param {point} cartesianCoordinates  Cartesian `x` and `y` coordinates.
     * @returns {Object}                    `q`, `r` and `s` cube coordinates.
     *
     * @example
     * const Hex = Honeycomb.extendHex()
     * Hex.cartesianToCube({ x: 4, y: -2 }) // { q: 5, r: -2, s: -3 }
     */
    return function cartesianToCube({ x, y }) {
        const { q, r } = isPointy
            ? { q: x - offsetFromZero(offset, y), r: y }
            : { q: x, r: y - offsetFromZero(offset, x) }

        return { q, r, s: -q - r }
    }
}
