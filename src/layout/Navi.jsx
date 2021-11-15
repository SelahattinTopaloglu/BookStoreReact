import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container,  Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setisAuthenticated] = useState(true)
  const history = useHistory()
function handleSignOut(params) {
  setisAuthenticated(false)
  history.push("/")

}
function handleSignIn(params) {
  setisAuthenticated(true)
}

  return (
    
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&& <CartSummary/>}
            {isAuthenticated? <SignIn signOut={handleSignOut}/> : <SignOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
