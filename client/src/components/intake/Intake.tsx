import IntakeForm from "./IntakeForm";

export default function Intake() {
  const storageKey = "JOB_APPLICATION"
  return (
    <div className="w-screen mx-auto flex flex-col justify-center items-center my-4 p-4">
      <IntakeForm storageKey={storageKey} />
    </div>
  )
}
