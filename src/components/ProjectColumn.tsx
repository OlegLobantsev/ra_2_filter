import { ProjectType } from "../module/ProjectType";

const ProjectColumn: React.FC<ProjectColumnProps> = ({ project, columns, numberColumn }) => {
  return (
    <div className="project__column">
        {
          project.map((item: ProjectType, index) => index % columns === numberColumn - 1 && (
            <div
              className="project__item"
              key={Date.now() + index}
            >
              <img src={item.img} alt="" />
            </div>
          ))
        }
      </div>
  )
}

export default ProjectColumn

type ProjectColumnProps = {
  project: ProjectType[],
  columns: number,
  numberColumn: number
}