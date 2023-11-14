import { useFormContext } from '../contexts/FormContext';

export default function projectsData() {
  const { projectsData, setProjectsData, nextPage, prevPage, wholeFormData } = useFormContext();
  return (
    <div>
      <h2>Projects Detail</h2>
      <label>
        Project Title:
        <input
          type="text"
          value={projectsData.projectTitle}
          onChange={(e) => (
            setProjectsData({
              ...projectsData,
              projectTitle: e.target.value
            })
          )}
        />
      </label>

      <label>
        URL:
        <input
          type="url"
          value={projectsData.url}
          onChange={(e) => (
            setProjectsData({
              ...projectsData,
              url: e.target.value
            })
          )}
        />
      </label>

      <label>
        Description:
        <input
          type="tel"
          value={projectsData.description}
          onChange={(e) => (
            setProjectsData({
              ...projectsData,
              description: e.target.value
            })
          )}
        />
      </label>

      <label>
        Start Date:
        <input
          type="text"
          value={projectsData.startDate}
          onChange={(e) => setProjectsData({
            ...projectsData,
            startDate: e.target.value
          })}
        />
      </label>

      <label>
        End Date:
        <input
          type="text"
          value={projectsData.endDate}
          onChange={(e) => setProjectsData({
            ...projectsData,
            endDate: e.target.value
          })}
        />
      </label>

      <button onClick={() => nextPage(wholeFormData)}>Continue & Save</button>
      <button onClick={prevPage}>Previous</button>

    </div>
  )
}
