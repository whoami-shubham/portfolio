import React, { Component } from 'react';
import ContentLoader from 'react-content-loader'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Items from '../item/Items';
import Articles from '../article/Articles';
import Projects from '../project/Projects';
import gmail from '../../assets/gmail.ico';
import Experience from '../experience/Experience';
import "./home.css"

const AvatarWithText = props => (
  <ContentLoader viewBox="0 0 400 160" height={160} width={400} {...props}>
    <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
    <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
    <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
    <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
    <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
    <circle cx="48" cy="48" r="48" />
  </ContentLoader>
)

export default class Home extends Component {
   constructor(){
      super();
      this.state = {
        educations:[],
        projects:[],
        articles:[],
        isloading:true,
        bio:"Software Engineer",
        exp:[]
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
          bio:data.data.bio,
          exp:data.data.exp
        })
        setTimeout(()=>this.setState({isloading:false}),2000)
        console.log("%c shubham  ","color:green;background:black;font-size:5vw;border:1px solid red;");
     })
     
   }
   
  render() {
    const {educations,projects,articles,bio,exp,isloading} = this.state;
    const expLoader = [...Array(3).keys()].map((key)=><Experience key={key} loading={true} />);
    const experiences = isloading?expLoader: exp && exp.map((expr,i)=><Experience key={i} {...expr} loading={false} />)
    
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
                          <span className="position">{bio}</span>
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
              <span className="name items_margin heading">Work Experience</span>
               <div className="row experiences">
                  {experiences}
               </div>
               <span className="name items_margin heading">Education</span>
              {educations.length!=0 && !isloading ?<Items data={educations} />:<AvatarWithText />}
              <span className="name items_margin heading">Recent Projects</span>
              {/* <hr/> */}
              {projects.length!=0 && !isloading?<Projects data={projects} />:<AvatarWithText />}
              <span className="name items_margin heading">Recent Articles</span>
              {/* <hr/> */}
              {articles.length!=0 && !isloading?<Articles data={articles} />:<AvatarWithText />}
          </div>
          <div className="container items_margin">
          </div>
          <Footer />
    </div>
    )
  }
}
