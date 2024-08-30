export type Status = 'NotStarted' | 'Doing' | 'Done'

export const StatusLabel = {
  'NotStarted': '未着手',
  'Doing': '着手中',
  'Done': '完了'
} as const

export type Todo = {
  id: number
  title: string
  description?: string
  status: Status
}