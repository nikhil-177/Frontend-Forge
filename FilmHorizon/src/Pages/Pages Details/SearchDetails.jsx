import { useLoaderData } from "react-router-dom";
import { Details } from "../../components/UI/Details";

export const SearchDetails = ({params}) => {
    console.log(params);

    const data = useLoaderData() || {};
  
    // console.log(data);
    return <Details data={data}/>

}
