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
                   {props.duration}
               </div>
               <div className="col">
                   <span>{props.title}</span>
                   <span>{props.org}</span>
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
