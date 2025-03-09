import { useLoaderData } from "react-router-dom";
import { Details } from "../../components/UI/Details";

export const PopularDetails = ({params}) => {
    console.log(params);

    const data = useLoaderData() || {};
    console.log(data);
    
  
    // console.log(data);
    return <Details data={data}/>

}
