import { combine, createStore } from 'effector';
import { converterEffect, getCurrencyListEffect } from './effects';
import { IStore } from '../../types/store';
import { Convertor, Currency } from '../../entities/app';
import { reset } from './events';

const $convertor = createStore<IStore<Convertor | null>>({ data: null, loading: false })
  .on(converterEffect.pending, (state, loading) => ({ ...state, loading }))
  .on(converterEffect.done, (state, { result: response, params }) => {
    return {
      ...state,
      data: { ...response.data, result: { ...response.data.result, code: params.to || 'USD' } }
    }
  })
  .reset(reset)

const $currencyList = createStore<IStore<Currency | null>>({
  loading: false,
  data: null
})
  .on(getCurrencyListEffect.pending, (state, loading) => ({ ...state, loading }))
  .on(getCurrencyListEffect.done, (state, { result: response, params }) => {
    return {
      ...state,
      data: response.data
    }
  })
  .reset(reset)

export const $appModel = combine({
  $convertor,
  $currencyList
})