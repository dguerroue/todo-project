export type Task = {
  _id: string,
  name: string,
  completed: boolean
}

export type PostTask = {
  name: string,
  completed: boolean
}

export type PutTask = PostTask;