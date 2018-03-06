declare module 'axis.js' {
    export function isArray(value: any): value is Array<any>
    export function isBoolean(value: any): value is boolean
    export function isDate(value: any): value is Date
    export function isFunction(value: any): value is Function
    export function isNull(value: any): value is null
    export function isNumber(value: any): value is number
    export function isObject(value: any): value is Object
    export function isRegExp(value: any): value is RegExp
    export function isString(value: any): value is string
    export function isUndefined(value: any): value is undefined
}
