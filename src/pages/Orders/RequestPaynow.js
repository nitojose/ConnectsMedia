import React from 'react';
import { useParams } from "react-router-dom";

export default function RequestPaynow() {
    const {id} = useParams();
    console.log("useparam",id)
  return (
    <div>RequestPaynow</div>
  )
}
