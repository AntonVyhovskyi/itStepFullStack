import { useState } from "react"

 

 export const useMyState = <T,>(value: T) : [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState(value)
    return [state, setState]
 }