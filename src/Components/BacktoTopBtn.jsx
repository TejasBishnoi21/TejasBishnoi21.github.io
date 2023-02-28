import { animateScroll as scroll } from "react-scroll";
import { ChevronDoubleUpIcon as ChevronUpIcon } from '@heroicons/react/24/outline';
import { useEffect } from "react";
import { useState } from "react";

const BacktoTop=()=>{
    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            return window.scrollY>600?setShow(true):setShow(false);
        })
    },[])

    const scrollToTop=()=>{
        scroll.scrollToTop();
    }

    return show && 
    <button onClick={()=> scrollToTop()}
    className="bg-accent w-12 h-12
    hover:bg-accent-hover text-white rounded-full
    fixed right-5 bottom-14 cursor-pointer
    flex justify-center items-center transition-all">
        <ChevronUpIcon className="w-6 h-6" />
    </button>
}

export default BacktoTop;