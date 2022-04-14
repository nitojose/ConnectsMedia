import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../CheckoutForm';

import React from 'react'
import { Container } from "react-bootstrap";

export default function Index() {

    const stripePromise = loadStripe("pk_test_51KlVz1SIk7SQPAkIBOlnAMkhRjf3H2qyJnjp1O6aCk9QmSiTDijmsJOyoMcbXYTrY24mYvvV3B4BWPEoJaZiLG4500xgbriwyj");


  return (
      <Container>
    <div className="payment ">
       
            <Elements stripe={stripePromise} >
                <CheckoutForm  />
            </Elements>


    </div>
    </Container>
  )
}
