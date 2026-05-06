import { refinerModelMap, type RefinerModel } from "@/lib/refiner-models"

const BASE34_ALPHABET = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"
const YEAR_REVERSE = "CDFGHJKLMNPQRSTVWXYZ"
const WEEK_REVERSE = "0123456789CDFGHJKLMNPQRTVWX123456789CDFGHJKLMNPQRTVWXY"

const SERIAL_WEEK_MIN = 1
const SERIAL_WEEK_MAX = 53
const SERIAL_DEFAULT_WEEK_MAX = 52
const SERIAL_LINE_MIN = 0
const SERIAL_LINE_MAX = 3399
const SERIAL_LINE_REPR_MAX = 1155

export type GeneratedSerial = {
  serial: string
  model: RefinerModel
  year: number
  week: number
  line: number
  copy: number
  yearCode: string
  weekCode: string
  lineCode: string
}

type GenerationOverrides = {
  year?: number
  week?: number
  line?: number
  copy?: number
}

function randomIntInclusive(min: number, max: number) {
  if (max < min) {
    throw new Error(`Invalid random range: ${min}...${max}`)
  }

  const range = max - min + 1

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const maxUnbiased = Math.floor(0x100000000 / range) * range
    const buffer = new Uint32Array(1)

    do {
      crypto.getRandomValues(buffer)
    } while (buffer[0] >= maxUnbiased)

    return min + (buffer[0] % range)
  }

  return min + Math.floor(Math.random() * range)
}

function pickRandom<T>(values: T[]) {
  return values[randomIntInclusive(0, values.length - 1)]
}

function lineToRmin(line: number) {
  if (line > SERIAL_LINE_REPR_MAX) {
    return Math.floor((line - SERIAL_LINE_REPR_MAX + 67) / 68)
  }

  return 0
}

function encodeYearCode(year: number, week: number) {
  const baseYear = year >= 2020 ? 2020 : 2010
  const index = (year - baseYear) * 2 + (week >= 27 ? 1 : 0)
  const code = YEAR_REVERSE[index]

  if (!code) {
    throw new Error(`Cannot encode year ${year} for week ${week}`)
  }

  return code
}

function encodeWeekCode(week: number) {
  const code = WEEK_REVERSE[week]

  if (!code) {
    throw new Error(`Cannot encode week ${week}`)
  }

  return code
}

function encodeLine(line: number, copy?: number) {
  let rawCopy = lineToRmin(line)

  if (copy !== undefined) {
    rawCopy += copy - 1
    if (rawCopy * 68 > line) {
      throw new Error(`Copy ${copy} cannot represent line ${line}`)
    }
  }

  const remaining = line - rawCopy * 68
  return [
    BASE34_ALPHABET[rawCopy],
    BASE34_ALPHABET[Math.floor(remaining / 34)],
    BASE34_ALPHABET[remaining % 34],
  ].join("")
}

function validateYear(model: RefinerModel, year: number) {
  if (!model.supportedYears.includes(year)) {
    throw new Error(`Year ${year} is not valid for ${model.id}`)
  }
}

function validateWeek(week: number) {
  if (week < SERIAL_WEEK_MIN || week > SERIAL_WEEK_MAX) {
    throw new Error(`Week ${week} is out of valid range`)
  }
}

function validateLine(line: number) {
  if (line < SERIAL_LINE_MIN || line > SERIAL_LINE_MAX) {
    throw new Error(`Line ${line} is out of valid range`)
  }
}

export function generateSerial(
  modelOrId: RefinerModel | string,
  overrides: GenerationOverrides = {}
): GeneratedSerial {
  const model =
    typeof modelOrId === "string" ? refinerModelMap[modelOrId] : modelOrId

  if (!model) {
    throw new Error("Unknown model")
  }

  const year = overrides.year ?? pickRandom(model.supportedYears)
  const week =
    overrides.week ?? randomIntInclusive(SERIAL_WEEK_MIN, SERIAL_DEFAULT_WEEK_MAX)
  const line =
    overrides.line ?? randomIntInclusive(SERIAL_LINE_MIN, SERIAL_LINE_MAX)
  const copy = overrides.copy ?? 1

  validateYear(model, year)
  validateWeek(week)
  validateLine(line)

  const yearCode = encodeYearCode(year, week)
  const weekCode = encodeWeekCode(week)
  const lineCode = encodeLine(line, overrides.copy)

  return {
    serial: `${model.locationCode}${yearCode}${weekCode}${lineCode}${model.productCode}`,
    model,
    year,
    week,
    line,
    copy,
    yearCode,
    weekCode,
    lineCode,
  }
}
