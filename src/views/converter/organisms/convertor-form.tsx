import { currencyOptions } from '../../../data/currency';
import { useConvertorForm } from '../../../hooks/app';

export const ConvertorForm = () => {
  const { formik } = useConvertorForm()

  return (
    <form onSubmit={formik.handleSubmit} className="mb-4">
      <div className="row g-2 align-items-end">
        <div className="col-3">
          <label htmlFor="from" className="form-label">From</label>
          <select
            id="from"
            name="from"
            value={formik.values.from}
            className="form-select"
            onChange={formik.handleChange}
          >
            {
              currencyOptions.map((value, idx) => (
                <option key={idx + 1} value={value}>{value}</option>
              ))
            }
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="to" className="form-label">To</label>
          <select
            id="to"
            name="to"
            className="form-select"
            value={formik.values.to}
            onChange={formik.handleChange}
          >
            {
              currencyOptions.map((value, idx) => (
                <option key={idx + 1} value={value}>{value}</option>
              ))
            }
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            min="1"
            id="amount"
            step="0.01"
            name="amount"
            type="number"
            className="form-control"
            placeholder="enter amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-success w-100" type="submit">
            Convert
          </button>
        </div>
      </div>
    </form>
  )
}