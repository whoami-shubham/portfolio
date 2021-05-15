import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div>
                  <div className="row my-3">
                        <div className="col-3 left_item">
                            <a href={this.props.data.url}><img src={this.props.data.img_url} className="img_item" alt="img" /></a>
                        </div>
                        <div className="col-9">
                            <ul className="paragraph right_item">
                                <li><b>{this.props.data.title}</b></li>
                                <div dangerouslySetInnerHTML={{ __html: this.props.data.content }} />
                                <li><a href={this.props.data.url} target='_blank'><button className="btn github"><i className="devicon-github-original"></i> webpage</button></a></li>
                            </ul>
                        </div>
                  </div>
            </div>
        )
    }
}
