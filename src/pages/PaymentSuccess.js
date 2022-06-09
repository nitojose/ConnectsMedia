import React from 'react'
import { useHistory,Link} from "react-router-dom";
export default function PaymentSuccess() {

  const history = useHistory();

  React.useEffect(()=>
  {
    setTimeout(()=>history.push('/dashboard'),3000);
  },[]);


  return (
    <div className='center-align'>PaymentSuccess</div>
  )
  
}
