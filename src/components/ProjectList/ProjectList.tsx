import { ProjectType } from '../../module/ProjectType';
import ProjectColumn from '../ProjectColumn';
import './projectList-style.css';

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {  
  return (
    <div className='project__list'>
      <ProjectColumn project={project} columns={3} numberColumn={1}/>
      <ProjectColumn project={project} columns={3} numberColumn={2}/>
      <ProjectColumn project={project} columns={3} numberColumn={3}/>
    </div>
  )
}

export default ProjectList

type ProjectListProps = {
  project: ProjectType[]
}