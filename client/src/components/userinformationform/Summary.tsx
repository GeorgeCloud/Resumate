import { FormDataSubTypes, FormDataType } from '../../lib/types';

/**
 * The Summary component.
 *
 * This component renders a summary of the form data.
 *
 * It takes the `formData` prop to access the form data.
 *
 * The `renderNestedData` function is used to recursively render the form data.
 *
 * It checks the type of data and renders it accordingly:
 *  - If the data is an array, it renders a list of the array items.
 *  - If the data is an object, it renders a list of the object's key-value
 *    pairs.
 * - Otherwise, it simply renders the data.
 *
 * @returns Summary
 *
 */

export default function Summary({ formData }: { formData: FormDataType }) {

  function renderNestedData(data: FormDataType | FormDataSubTypes) {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index} className="mb-4">{renderNestedData(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof data === 'object') {
      return (
        <ul>
          {Object.entries(data).map(([key, value], index) => (
            <li key={index} className="mb-2">
              <strong className="text-xs tracking-tight subpixel-antialiased">{key}:</strong> {renderNestedData(value)}
            </li>
          ))}
        </ul>
      );
    } else {
      return data;
    }
  };

  return (
    <div>
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-2">Summary</div>
      {renderNestedData(formData)}
    </div>
  );
}
