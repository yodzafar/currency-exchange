import { createEffect } from 'effector';
import currency from '../../service/currency';

export const converterEffect = createEffect({
  handler: currency.convert
})

export const getCurrencyListEffect = createEffect({
  handler: currency.currencies
})