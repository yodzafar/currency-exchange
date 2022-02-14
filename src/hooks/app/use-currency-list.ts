import { useCallback, useEffect, useState } from 'react';
import { QueryParams } from '../../types/api';
import { currencyOptions } from '../../data/currency';
import { getCurrencyListEvent, reset } from '../../models/app';
import { usePrevious } from './use-previous';

export const useCurrencyList = () => {
  const [base, setBase] = useState<string>('USD')
  const prevState = usePrevious<string>(base)

  useEffect(() => {
    let timer: NodeJS.Timer
    const params: QueryParams = {
      from: base,
      to: currencyOptions.join(',')
    }
    if(prevState !== base) {
      getCurrencyListEvent(params)

      timer = setInterval(() => {
        getCurrencyListEvent(params)
      },15000)
    }

    return () => {
      clearInterval(timer)
      reset()
    }
  }, [base, prevState])

  return {
    base,
    setBase
  }
}