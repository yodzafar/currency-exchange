import { request } from './index';
import { QueryParams } from '../types/api';
import { Convertor, Currency } from '../entities/app';

export default {
  convert: (params: QueryParams) => request<Convertor>({url: '/convert', method: 'get', params}),
  currencies: (params: QueryParams) => request<Currency>({url: '/fetch-multi', method: 'get', params})
}