export type Convertor = {
  base: string
  amount: number
  result: { [key: string]: number | string }
  ms: number
}

export type Currency = {
  base: string
  results: { [key: string]: number }
  updated: string
  ms: number
}