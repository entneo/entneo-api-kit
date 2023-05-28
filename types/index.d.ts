export type axiosRes = {
  data: Record<string, unknown>
  status: number
}
export type AnyObject = Record<string, any>
export type AnyArray = [any]
export type UnknownObject = Record<string, unknown>
export type EntneoInit = {
  auth: string,
  apiUrl: string
  //potentially a job link url
}
