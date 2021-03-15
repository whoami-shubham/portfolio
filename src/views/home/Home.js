import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Items from '../item/Items';
import Articles from '../article/Articles';
import Projects from '../project/Projects';
import gmail from '../../assets/gmail.ico';
export default class Home extends Component {
   constructor(){
      super();
      this.state = {
        educations:[],
        projects:[],
        articles:[],
        isloading:true,
        bio:"Software Engineer"
      }
   }
   
   componentWillMount(){
     fetch('https://raw.githubusercontent.com/whoamishubham/whoamishubham.github.io/data/data.json')
     .then((data)=>data.json())
     .then((data)=>{
        this.setState({
          educations:data.data.educations,
          projects:data.data.projects,
          articles:data.data.articles,
          isloading:false,
          bio:data.data.bio
        })
        console.log("%c shubham  ","color:green;background:black;font-size:5vw;border:1px solid red;");
     })
     
   }
   
  render() {

    return (
      
     <div>
          <Navbar />
          <div className="row">
                <div className="col-12 cover">
                </div>
                <div className="col-12">
                   <center>
                     <img className="rounded-circle profile" src="https://raw.githubusercontent.com/whoamishubham/whoamishubham.github.io/data/images/profile.jpg" alt="loading.." />
                     <figcaption> 
                          <span className="name">Shubham Jha</span>
                          <span className="position">{this.state.bio}</span>
                          <span>
                            <a href="https://linkedin.com/in/whoamishubham" target="_blank" className="fa fa-linkedin"></a>&nbsp;&nbsp;
                            <a href="https://github.com/whoami-shubham" target="_blank" className="fa fa-github"></a>&nbsp;&nbsp;
                            <a href="https://stackoverflow.com/users/7784354/shubham-jha?tab=profile" target="_blank" className="fa fa-stack-overflow"></a>&nbsp;&nbsp;
                            <a href="https://www.quora.com/profile/Shubham-Jha-171" target="_blank" className="fa fa-quora"></a>&nbsp;&nbsp;
                            <a href="https://twitter.com/whoami_shubham" target="_blank" className="fa fa-twitter"></a>&nbsp;&nbsp;
                            <a href="https://www.facebook.com/whoami.shubham" target="_blank" className="fa fa-facebook"></a>
                            <a href="mailto:shubhamkumarjha0013@gmail.com" target="_blank" className="fa fa-gmail"><img src={gmail}  className="gmail" /></a>
                          </span>
                     </figcaption>
                   </center>
                </div>
          </div>
          <div className="container my-5">
              <span className="name items_margin">Education</span>
              <hr/>
              {this.state.educations.length!=0?<Items data={this.state.educations} />:<p>Loading...</p>}
              <span className="name items_margin">Recent projects</span>
              <hr/>
              {this.state.projects.length!=0?<Projects data={this.state.projects} />:<p>Loading...</p>}
              <span className="name items_margin">Articles from my Blog</span>
              <hr/>
              {this.state.articles.length!=0?<Articles data={this.state.articles} />:<p>Loading...</p>}
          </div>
          <div className="container items_margin">
          </div>
          <Footer />
    </div>
    )
  }
}
