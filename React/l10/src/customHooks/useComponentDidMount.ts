import { useEffect } from "react"



export const useComponentDidMount = (cb: any, setState: any) => {
    return useEffect(()=>{
        cb().then((res: {data: any; status: number})=> {
            if (res.status === 200) {
                setState(res.data)
            }
            
        }).catch((err: any)=>console.log((err)))
    },[])
}