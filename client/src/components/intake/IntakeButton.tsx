import type { LocalStorageButtonProps } from "../../lib/types";

export default function IntakeButton({ handleSaveClick }: LocalStorageButtonProps) {

  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <span className="text-sm italic p-2">Clicking &apos;Save&apos; will save whatever is pasted into the textbox, to local storage</span>
      <button className="mx-2 mb-4" onClick={handleSaveClick}>Save</button>
    </div>
  )
}
