import { DatesDataType } from "../../lib/types"

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
