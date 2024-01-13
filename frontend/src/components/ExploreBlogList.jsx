import { useState } from 'react'
import { Button } from "./";
import { motion } from "framer-motion";
import classNames from 'classnames';

export default function ExploreBlogList({blog, focus, className}) {
  const [hover, setHover] = useState(false);
  const variant = {
    "normal": {y:0},
    "focus": {y:0},
  }
  const hoverVariant = {
    "initial": {y: "20%", width: "25%", height: 0,},
    "animate": {x: "40%", y: "40%", width: "300%", height: "300%", transition:{duration:1}},
  };
  const classes = classNames("w-[24vw] h-[64vh] text-secondary-500 flex flex-col items-start justify-evenly relative overflow-hidden gap-2 hover:cursor-pointer", {
    [className]: className,
  })
  return (
    <motion.li 
      variants={variant}
      initial="normal"
      animate={focus ? "focus" : "normal"}
      className={classes}
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}
    >
      <motion.img initial={{scale: 1}} animate={hover?{scale:1.05}:{}} src={blog.src} alt="blog-image" className='w-full h-[40vh]' />
      <h1 className="font-semibold text-xl">{blog.heading}</h1>
      <p className="text-xs ">{blog.text}</p>
      <div className='flex flex-col h-12 overflow-hidden'>
        <motion.div initial={{y:0}} animate={hover ? {y:"-100%"}: {}}><Button className="!pl-px" arrow >learn more</Button></motion.div>
        <motion.div initial={{y:0}} animate={hover ? {y:"-100%"}: {}}><Button className="!pl-px" arrow >learn more</Button></motion.div>
      </div>

      {/* 
      <motion.div variants={hoverVariant} className="bg-secondary-500 bg-opacity-75 absolute bottom-0 right-0 z-[-1] rounded-full rotate-12" initial="initial" animate={hover ? "animate" : "initial"}></motion.div>
      <img src={"./assets/blog1.jpg"} alt="blog-image" className='absolute z-[-2] h-full w-full object-cover object-center'/>
      {!hover && <div className='absolute top-0 left-0 w-full h-full bg-white opacity-50 z-[-1]'></div>} 
      */}
    </motion.li>
  )
}
