import { useLoaderData } from "react-router-dom";
import { Details } from "../../components/UI/Details";

export const MovieDetails = ({ params }) => {
  console.log(params);

  const data = useLoaderData() || {}; // Default to an empty object if data is undefined

  console.log(data);


  // const CastMember = data.credits ? data.credits.cast : []; // Handle undefined credits

  // const getCrewMembers = (members, jobTitle) => {
  //   const member = members
  //     .filter((person) => person.job === jobTitle)
  //     .map((person) => person.name)
  //     .slice(0, 6)
  //     .join(" , ");
  //   return member.length > 0 ? member : "N/A";
  // };

  return <Details data={data}/>
};
