import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import dotenv from "dotenv";

import { clearAllFromCart } from "../../redux/cart/cart.actions";
dotenv.config();

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = (token) => {
    clearCart();
    alert(<h1>Payment Successful</h1>);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearAllFromCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
