import { DatesDataType } from "../../lib/types"

/**
 * The DatesInput component.
 *
 * This component renders the start and end date input fields.
 *
 * It takes the `entry`, `handleInputChange`, and `errors` props to manage the
 * dates for the current entry.
 *
 * The `entry` prop is an object that contains the current values of the start
 * and end dates.
 *
 * The `handleInputChange` prop is a function that updates the value of the
 * start or end date when the corresponding input field is changed.
 *
 * The `errors` prop is an object that contains any error messages for the
 * start and end dates.
 *
 * The component renders two input fields: one for the start date and one for
 * the end date. Each input field has an associated label and an error message
 * that is displayed if the corresponding date is invalid.
 *
 * The format for a valid date is YEAR-MONTH-DAY, where year is four
 * characters, and the month and day are each two (XXXX-XX-XX).
 * 
 * @returns DatesInput
 *
 */

export default function DatesInput({ entry, handleInputChange, errors }: {
  entry: DatesDataType,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  errors: Record<string, string>
}) {
  return (
    <div>

      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="startDate" className="text-sm/4">
            Start Date
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="startDate"
            name="startDate"
            value={entry.startDate}
            onChange={handleInputChange}
          />
          {errors.startDate && <span className="error">{errors.startDate}</span>}
        </div>
      </div>
      <div className="row mb-2 flex justify-between items-baseline">
        <div className="col1">
          <label htmlFor="endDate" className="text-sm/4">
            End Date
          </label>
        </div>
        <div className="col2 flex justify-center">
          <input
            type="text"
            className="rounded-md"
            id="endDate"
            name="endDate"
            value={entry.endDate}
            onChange={handleInputChange}
          />
          {errors.endDate && <span className="error">{errors.endDate}</span>}
        </div>
      </div>

    </div>
  )
}
