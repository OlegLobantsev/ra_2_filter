import { Component } from 'react';
import data from '../data/data.json';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList/ProjectList';
import { ProjectType } from '../module/ProjectType';

class Portfolio extends Component {
  
  public readonly state: {
    selectedFilter: string;
    filterData: ProjectType[];
  } = {
    selectedFilter: 'All',
    filterData: data,
  };

  constructor(props: string) {
    super(props);
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  getFilters() {
    const filters: Array<string> = ['All', ...data.map(({category}) => category)];
    return [...new Set(filters)];
  }

  onSelectFilter(filter: string): void {
    this.setState({selectedFilter: filter});
    this.setState({filterData: filter === 'All'
      ? data
      : data.filter(({category}) => category === filter)});
  }

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.getFilters()}
          selected={this.state.selectedFilter}
          // eslint-disable-next-line @typescript-eslint/unbound-method
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList project={this.state.filterData} />
      </div>
    )
  }
}

export default Portfolio;