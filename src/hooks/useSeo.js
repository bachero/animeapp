import react, {useRef} from 'react'

export default function useTitle ({ title }){
    const prevTitle = useRef(document.title)
    //const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))
    //prevDescription.setAttribute('content', description)

    document.title = title
}