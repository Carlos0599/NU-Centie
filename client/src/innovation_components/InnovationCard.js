import React from "react";
import { CardMedia, 
  Typography, 
  CardHeader, 
  CardContent, 
  Card,
  CardActions,
  Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';

//http://localhost:3003/getInnovatorById/1



export default function InnovationCard({ innovation })   {

  const [getInnovator, setInnovator] = useState([]);

  useEffect(()=> {
    Axios.get(`http://localhost:3003/getInnovatorById/${innovation.innovator_id}`).then((response)=>
    {setInnovator(response.data);
    })
  },[]);

//   return (
//     <Card>
//       <CardHeader
//         title={innovation.innovation_title}
//         subheader={innovation.innovation_status}
//       />
//       <CardMedia component="img" height="194" image={`data:image/jpeg;base64,${Buffer.from(innovation.innovation_pictures?.data).toString(
//             `base64`
//           )}`}
//       />
//       <CardContent>
//         <Typography>{innovation.innovation_description}</Typography>
//         {getInnovator.map((val)=>{
//           return <Typography>
//             Innovator: <strong> {val.innovator_lname} {val.innovator_fname}</strong>
//             </Typography>
//         })}
//       </CardContent>
//       <CardActions>
//         <Link
//         to={{
//           pathname: "/innovationSpecific",
//           state: {innovation : innovation}
          
//         }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           href= "/innovationSpecific"  
// > 
//           View Item
//         </Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }

 return (
  <>
  {getInnovator.map((val)=>{
    return  <Card>
    <CardHeader
      title={innovation.innovation_title}
      subheader={innovation.innovation_status}
    />
    <CardMedia component="img" height="194" image={`data:image/jpeg;base64,${Buffer.from(innovation.innovation_pictures?.data).toString(
          `base64`
        )}`}
    />
    <CardContent>
      <Typography>{innovation.innovation_description}</Typography>
<Typography>
          Innovator: <strong> {val.innovator_fname} {val.innovator_lname}</strong>
          </Typography>

    </CardContent>
    <CardActions>
      <Link
      to={{
        pathname: "/innovationSpecific",
        state: {innovation : innovation,
                innovator : val
        }
        
      }}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        href= "/innovationSpecific"  
> 
        View Item
      </Button>
      </Link>
    </CardActions>
  </Card>
  })},
  </>
 )}