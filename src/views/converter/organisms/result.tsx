import { useStore } from 'effector-react';
import { $appModel } from '../../../models/app';
import { Spinner } from '../../../components/ui/spinner';

export const Result = () => {
  const {$convertor: {data, loading}} = useStore($appModel)
  return (
    <div>
      {
        loading && <Spinner />
      }
      {
        !loading && !!data && (
          <div className='my-3 d-flex align-items-center justify-content-center'>
            <h5 className='mb-0'>
              {`${data.amount.toFixed(2)} ${data.base}`}
            </h5>
            <div className='mx-1'>
              =
            </div>
            <h2 className='mb-0'>
              {`${data.result[data.result['code']]} ${data.result['code']}`}
            </h2>
          </div>
        )
      }
    </div>
  )
}