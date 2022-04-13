export interface INote {
  id: string,
  name: string,
  created_at: string,
  content: string,
  dates: string[] | null,
  category: string,
  status: string
}

export interface ICreateNote {
  name: string,
  content: string,
  category: string,
}

export interface ISummary {
  category: string,
  active: number,
  archived: number
}