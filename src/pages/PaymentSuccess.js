import React from 'react'
import { useHistory,Link} from "react-router-dom";
import '../../src/style/paymentsuccess.css'
export default function PaymentSuccess() {

  const history = useHistory();

  React.useEffect(()=>
  {
    setTimeout(()=>history.push('/dashboard'),3000);
  },[]);


  return (
<div class="box"> 
  <div class="success alert">
    <div class="alert-body">
      Success !
    </div>
  </div>
   



    </div>
  )
  
}
