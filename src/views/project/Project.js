import React, { Component } from 'react'
import "./project.css"
export default class Project extends Component {
    render() {
        return (
            <div>
                 <div className="row my-3">
                    <div className="col-3 left_item">
                        <a href={this.props.data.demo}><img src={this.props.data.img_url} className="img_item" alt="img" /></a>
                    </div>
                    <div className="col-9 right_item">
                        <ul className="paragraph">
                            <li><b>{this.props.data.name}</b></li>
                            <li><a href={this.props.data.url} target="_blank">[code]</a> &nbsp; {this.props.data.isdemo?<a href={this.props.data.demo} target="_blank">[demo]</a>:null} </li>
                            <div dangerouslySetInnerHTML={{ __html: this.props.data.content }} />
                        </ul>
                    </div>
                </div>
        </div>
        )
    }
}
