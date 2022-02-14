import { createEvent } from 'effector';
import { converterEffect, getCurrencyListEffect } from './effects';
import { QueryParams } from '../../types/api';

export const convertorEvent = createEvent<QueryParams>()
export const getCurrencyListEvent = createEvent<QueryParams>()
export const reset = createEvent()

convertorEvent.watch(converterEffect)
getCurrencyListEvent.watch(getCurrencyListEffect)