import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface BlockState {
  x: number
  y: number
  revealed: boolean
  mine?: boolean
  flagged?: boolean
  adjacentMines: number
}

export interface ImageInfo {
  data: {
    attributes: {
      url: string
      name: string
    }
    id: number
  }
}

export interface BookInfo {
  cover: ImageInfo
  name: string
  auther: string
  word: number
}

export interface BookList {
  attributes: BookInfo
  id: number
}