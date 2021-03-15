import React, { Component } from 'react'
import Article from './Article';

export default class Articles extends Component {
    render() {
        let articles = this.props.data.map((article)=>{
             return <Article key={article.id}  data={article}/>
        })
        return (
            <div>
                {articles}
            </div>
        )
    }
}
