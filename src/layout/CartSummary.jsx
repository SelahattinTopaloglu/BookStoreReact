import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem, Label } from "semantic-ui-react";

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem)=>(
              <Dropdown.Item key= {cartItem.book.id}>
                      {cartItem.book.bookName}
                      <Label>
                        {cartItem.quantity}
                      </Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider/>
          <DropdownItem as={NavLink} to="/cart" >Sepete git</DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

