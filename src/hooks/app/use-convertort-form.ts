import { useFormik } from 'formik';
import { convertorEvent, reset } from '../../models/app';
import { useEffect } from 'react';

type FormValues = {
  from: string
  to: string
  amount: string
}

export function useConvertorForm() {
  const formik = useFormik<FormValues>({
    initialValues: {
      from: 'USD',
      to: 'EUR',
      amount: '1.00'
    },
    onSubmit(values) {
      convertorEvent(values)
    }
  })

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return {
    formik
  }
}