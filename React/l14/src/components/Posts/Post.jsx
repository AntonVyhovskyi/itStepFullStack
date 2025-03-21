import { useEffect, useState } from "react";



function PostComponent() {

    const [data, setData] = useState({...window.history.state.usr});
   useEffect(() => {
       console.log(data);
        }, []);
    return ( 
        <div>
        {data.id}
        <hr/>
        {data.title}
        <hr/>
        {data.body}
        </div>
     );
}

export default PostComponent;