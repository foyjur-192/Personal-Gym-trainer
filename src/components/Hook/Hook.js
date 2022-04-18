import { useEffect, useState } from "react"
const Hook = () => {
   
     const [details, setDetails] = useState([]);

        useEffect(() => {
        fetch('package.JSON')
        .then(res => res.json())
        .then(data => setDetails(data));
        },[])
       
        return[details, setDetails];
    }

export default Hook;