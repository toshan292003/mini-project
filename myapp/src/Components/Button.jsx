import React ,{useRef} from "react";
import './button.css';
import {motion , MotionConfig} from 'framer-motion';

export default function Button(props){
    const scrollRef = useRef(null);
    return(
        <>
            <MotionConfig transition={{ duration: .5 }}>
                <a href = {props.link}  className="button">
                    <motion.button initial={{ opacity: 0 , left: '-50px',scale : .9}} whileInView={{ opacity: 1, left: '0px' , scale: 1 }} viewport={{ root: scrollRef }} className="button">{props.title}</motion.button>
                </a>
            </MotionConfig>
        </>
    )
}
