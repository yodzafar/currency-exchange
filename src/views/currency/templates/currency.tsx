import { currencyOptions } from '../../../data/currency';
import { useCurrencyList } from '../../../hooks/app';
import { useStore } from 'effector-react';
import { $appModel } from '../../../models/app';
import { Spinner } from '../../../components/ui/spinner';

export const Currency = () => {
  const { base, setBase } = useCurrencyList()
  const { $currencyList: { data, loading } } = useStore($appModel)
  return (
    <>
      <div>
        <label htmlFor="base">Base currency</label>
        <select
          value={base}
          onChange={(e) => setBase(e.target.value)}
          id="base"
          className="form-select"
        >
          {
            currencyOptions.map((value, idx) => (
              <option key={idx + 1} value={value}>{value}</option>
            ))
          }
        </select>
      </div>
      {
        !data && loading && <Spinner/>
      }
      {
        data && (
          <div>
            {
              Object.keys(data.results).map((item, idx) => (
                <div key={idx + 1} className='my-3 d-flex align-items-center'>
                  <h6 className='mb-0'>
                    {`1.00 ${data.base}`}
                  </h6>
                  <div className='mx-1'>
                    =
                  </div>
                  <h4 className='mb-0'>
                    {`${data.results[item]} ${item}`}
                  </h4>
                </div>
              ))
            }
          </div>
        )
      }

    </>
  )
}