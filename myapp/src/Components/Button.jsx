import React ,{useRef} from "react";
import './button.css';
import {motion, transform, useScroll} from 'framer-motion';

export default function Button(props){
    const scrollRef = useRef(null);
    return(
        <>
            <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ root: scrollRef }} href = {props.link}  className="button">
                <button className="button">{props.title}</button>
            </motion.a>
        </>
    )
}
