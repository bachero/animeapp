import React, { useState, useEffect, useRef, Suspense } from 'react'
import Spinner from '../spinner/index'
const TopSearches = React.lazy(
    () => import('./TopSearches')
)

export default function LazyTop(){
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    useEffect(function(){
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
           rootMargin: '100px' 
        })

        observer.observe(elementRef.current)
    })
    return <div ref={elementRef}>
        <Suspense fallback={<Spinner/>}>
            {show ? <TopSearches/> : null}
        </Suspense>    
    </div>
}