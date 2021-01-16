import { isNumber } from 'lodash'

function parseHexStringAsFloat (str) {
  var float = 0
  var sign
  var mantissa
  var exp
  var int = 0
  var multi = 1
  if (str === '0x00000000') {
    return 0.0
  } else if (/^0x/.exec(str)) {
    int = parseInt(str, 16)
  } else {
    for (var i = str.length - 1; i >= 0; i -= 1) {
      if (str.charCodeAt(i) > 255) {
        // eslint-disable-next-line no-console
        console.log('Wrong string parametr')
        return false
      }
      int += str.charCodeAt(i) * multi
      multi *= 256
    }
  }
  sign = (int >>> 31) ? -1 : 1
  exp = (int >>> 23 & 0xff) - 127
  mantissa = ((int & 0x7fffff) + 0x800000).toString(2)
  for (i = 0; i < mantissa.length; i += 1) {
    float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0
    exp--
  }
  return parseFloat((float * sign).toFixed(2))
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const normalizeValue = (value, minValue = 0, maxValue = 100) => {
  if (value <= minValue) {
    return minValue
  }

  if (value >= maxValue) {
    return maxValue
  }

  return value
}

export const cutDigits = (data, places = 3) => {
  if (typeof data === 'object' || data.isArray) {
    var newArray = []
    for (let index = 0; index < data.length; index++) {
      newArray.push(parseFloat(Number.parseFloat(data[index]).toFixed(places)))
    }
    return newArray
  } else {
    try {
      return parseFloat(Number.parseFloat(data).toFixed(places))
    } catch (error) {
      return 0
    }
  }
}

export const roundDigits = (data) => {
  var sNumber = Number(data).toString()
  const pointIndex = sNumber.indexOf('.')
  if (pointIndex === -1) {
    return data
  } else {
    var a = Math.pow(10, 3)
    return Math.round(data * a) / a
  }
}

export const cutZeroValuesOfArray = (data) => {
  if (typeof data === 'object' || data.isArray) {
    var newArray = []
    for (let index = 0; index < data.length; index++) {
      if (data[index] !== 0) {
        newArray.push(data[index])
      }
    }
    return newArray
  } else {
    return data
  }
}

export const secondsToTimeFormat = (seconds = 0) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

export const today = () => {
  const date = new Date()
  // return ((date.getDate() < 10) ? '0' : '') + date.getDate() + '/' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '/' + date.getFullYear()
  return date.getFullYear() + '-' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '-' + ((date.getDate() < 10) ? '0' : '') + date.getDate()
}

export const yesterday = () => {
  const date = new Date()
  return date.getFullYear() + '-' + (((date.getMonth() + 1) < 10) ? '0' : '') + (date.getMonth() + 1) + '-' + (((date.getDate() - 1) < 10) ? '0' : '') + (date.getDate() - 1)
}

export const timeNow = () => {
  const date = new Date()
  return ((date.getHours() < 10) ? '0' : '') + date.getHours() + ':' + ((date.getMinutes() < 10) ? '0' : '') + date.getMinutes() + ':' + ((date.getSeconds() < 10) ? '0' : '') + date.getSeconds()
}

export const msToTimeString = (value = 0) => {
  // Pad to 2 or 3 digits, default is 2
  function pad (n, z) {
    z = z || 2
    return ('00' + n).slice(-z)
  }
  var s = value
  var ms = s % 1000
  s = (s - ms) / 1000
  var secs = s % 60
  s = (s - secs) / 60
  var mins = s % 60
  var hrs = (s - mins) / 60

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
}

export const parseObjectValue = (oInput) => {
  if (!oInput) {
    return null
  }
  var retVal = oInput.val
  var inputVal = oInput.val.indexOf('0x') === 0 ? oInput.val : '0x' + oInput.val
  switch (oInput.typ) {
    case 'f':
    case 'float':
      retVal = parseHexStringAsFloat(inputVal)
      break
    case 'i':
    case 'int':
      retVal = parseInt(inputVal, 16)
      break
    default:
      break
  }
  return retVal
}

export const parseValue = (input, type) => {
  if (typeof input === 'object') {
    return parseObjectValue(input)
  } else if (typeof input === 'undefined') {
    return 'undefined'
  } else if (typeof type !== 'undefined') {
    return parseObjectValue({ val: input, typ: type })
  } else {
    const test = Number(input)
    if (isNumber(test)) {
      return test
    }
    return input
  }
}

export const getValueByTypeDef = (rawValue, typeDef = {}) => {
  if (typeof typeDef.type === 'undefined') {
    return rawValue
  }
  var retVal

  switch (typeDef.type) {
    case 'bin':
      retVal = []
      // map bit definition enum
      Object.keys(typeDef.bitMapping).forEach(key => {
        if (bitTest(Number(rawValue), Number(key))) {
          retVal.push({ name: typeDef.bitMapping[key], value: 1 })
        } else {
          retVal.push({ name: typeDef.bitMapping[key], value: 0 })
        }
      })
      break
    case 'i':
    case 'int':
    case 'f':
    case 'float':
    case 's':
    case 'string':
      retVal = parseObjectValue({ val: rawValue, typ: typeDef.type })
      break

    default:
      return rawValue
  }
  return retVal
}

export const bitTest = (num, bit) => {
  return ((num >> bit) % 2 !== 0)
}

export const bitSet = (num, bit) => {
  return num | 1 << bit
}

export const bitClear = (num, bit) => {
  return num & ~(1 << bit)
}

export const bitToggle = (num, bit) => {
  return bitTest(num, bit) ? bitClear(num, bit) : bitSet(num, bit)
}

export const hex2rgb = (hex, opacity) => {
  hex = (hex + '').trim()

  let rgb = null
  const match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/)

  if (!match) {
    return null
  }

  rgb = {}

  hex = match[1]

  if (hex.length === 6) {
    rgb.r = parseInt(hex.substring(0, 2), 16)
    rgb.g = parseInt(hex.substring(2, 4), 16)
    rgb.b = parseInt(hex.substring(4, 6), 16)
  } else if (hex.length === 3) {
    rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16)
    rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)
    rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)
  }

  rgb.css = 'rgb' + (opacity ? 'a' : '') + '('
  rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b
  rgb.css += (opacity ? ',' + opacity : '') + ')'

  return rgb
}
