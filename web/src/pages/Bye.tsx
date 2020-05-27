import React from 'react'; 
import { useByeQuery } from '../generated/graphql';
interface Props{}
function Bye() {
    const {data,loading,error} = useByeQuery({
    fetchPolicy:"network-only"  
    });

    if(loading){
        return <div>loading...</div>
    }
 if(error){
  console.log(error)
  return <div>Err</div>
 }
 if(!data){
     return <div>no data</div>
 }


return <div>{data.bye}</div>;
};
export default Bye;