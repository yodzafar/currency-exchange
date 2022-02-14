import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';

const api_key = '094b8f993a-10e6ea55aa-r7af4o'

export const httpClient = axios.create({
  baseURL: 'https://api.fastforex.io'
})

httpClient.interceptors.request.use((config) => {
  const cfg: AxiosRequestConfig = { ...config }
  if (cfg.params) {
    cfg.params['api_key'] = api_key
  }
  return cfg
})

interface IParams<D> {
  method: Method
  url: string,
  headers?: any
  data?: D,
  params?: any,
  onUploadProgress?: AxiosRequestConfig['onUploadProgress'],
}

export function request<R, D = any>(params: IParams<D>): AxiosPromise<R> {
  return httpClient(params)
}