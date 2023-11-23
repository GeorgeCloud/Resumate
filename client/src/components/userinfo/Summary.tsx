import { FormDataType } from '../../lib/types';

export default function Summary({ formData }: { formData: FormDataType }) {
  const renderNestedData = (data: any) => {
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
              <strong>{key}:</strong> {renderNestedData(value)}
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
      <h2 className="text-lg underline">Summary</h2>
      {renderNestedData(formData)}
    </div>
  );
};
