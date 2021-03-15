import React, { Component } from 'react'
import Project from './Project';

export default class Projects extends Component {
    render() {
        let projects = this.props.data.map((project)=>{
              return <Project key={project.id} data={project} />
        })
        return (
            <div>
                 {projects}
            </div>
        )
    }
}
