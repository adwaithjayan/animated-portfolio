import {useEffect, useRef, useState} from "react";
import {useInView} from "motion/react";
import {animate} from "motion";

export const Counter = ({text,to,from}) => {
    const [count, setCount] = useState(from)
    const ref = useRef(null)
    const isInView = useInView(ref);

    useEffect(() => {
        const animation =animate(from,to,{
            duration:4,
            ease:'easeOut',
            onUpdate:(prev)=>{
                setCount(Math.floor(prev))
            }
        });
        return () => animation.cancel();
    },[isInView,from,to])

    return (
        <div className='counter' ref={ref}>
            <h1>{count}+</h1>
            <p>{text}</p>
        </div>
    )
}
