import React,{useState} from 'react'
import Modal from '../modal/Modal';
import "./experience.css"
export default function Experience(props) {
    const [open,setOpen] = useState(false);
    return (
        <>
        <div className="row exp-container" onClick={()=>setOpen(true)}>
            <div className="col">
               <div className="row">
                   <p>{props.duration}</p>
               </div>
               <div className="col padding-left-0">
                   <span className="row paragraph">{props.title}</span>
                   <span className="row org">{props.org}</span>
               </div>
            </div>
            <div>
               <img src={props.imgUrl} alt={props.org} className="exp-img"/>
            </div>
        </div>
        <Modal {...props} onClose={()=>setOpen(false)} open={open} />
        </>
    )
}
