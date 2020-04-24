type Value = string | boolean | Date | Number

export interface Item {
  name: string
  value: Value
  id?: string
}

export interface Parsed {
  [key: string]: Value
}
