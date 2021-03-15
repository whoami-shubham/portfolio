import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
         <div className="row my-3">
                  <div className="col-3 left_item">
                     <img src={this.props.data.img_url} className="img_item" alt="img" />
                  </div>
                  <div className="col-9 right_item">
                     <ul className="paragraph">
                        <div dangerouslySetInnerHTML={{ __html: this.props.data.content }} />
                     </ul>
                  </div>
          </div>
      </div>
    )
  }
}
