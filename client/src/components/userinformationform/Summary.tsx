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
      <div className="text-center font-normal underline underline-offset-1 decoration-1 text-xl mb-4">Summary</div>
      {renderNestedData(formData)}
    </div>
  );
};
