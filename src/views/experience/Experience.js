import React,{useState} from 'react'
import Modal from '../modal/Modal';
import style from "../../../styles/Experience.module.css"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={160}
    viewBox="0 0 300 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="30" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)
export default function Experience(props) {
    const [open,setOpen] = useState(false);
    const {loading} = props;
    return loading?<Loader />:(
        <>
        <div className={`row ${style.expContainer}`} onClick={()=>setOpen(true)}>
            <div className="col">
               <div className="row">
                   <p>{props.duration}</p>
               </div>
               <div className={`col ${style.paddingLeft0}`}>
                   <span className="row paragraph">{props.title}</span>
                   <span className="row org">{props.org}</span>
               </div>
            </div>
            <div>
               <img src={props.imgUrl} alt={props.org} className={style.expImg}/>
            </div>
        </div>
        <Modal {...props} onClose={()=>setOpen(false)} open={open} />
        </>
    )
}
