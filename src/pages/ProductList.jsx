import React, { useState, useEffect } from "react";

import { Button, Icon, Menu, Table } from "semantic-ui-react";
import BookService from "../services/bookService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

export default function ProductList() {
  //const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   let productService = new ProductService();
  //   productService
  //   .getProducts()
  //   .then((result) => setProducts(result.data.data));
  // });

  const dispatch = useDispatch()
  const [books, setBooks] = useState([]);

  useEffect(() => {
  let bookService = new BookService()
  bookService.getBooks().then(result=>setBooks(result.data.data))
  })

  const handleAddToCart=(book)=>{ 
    dispatch(addToCart(book));
    toast.success(`${book.bookName} sepete eklendi!`)
  }
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Book Name</Table.HeaderCell>
            <Table.HeaderCell>Page Number</Table.HeaderCell>
            <Table.HeaderCell>Author Name</Table.HeaderCell>
            <Table.HeaderCell>Author Surname</Table.HeaderCell>
            <Table.HeaderCell>Book Price</Table.HeaderCell>  
            <Table.HeaderCell>Release Dates</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {books.map((book) => (
            <Table.Row>
              <Table.Cell><Link to={`/books/${book.id}`}>{book.bookName}</Link></Table.Cell>
              <Table.Cell>{book.pageNumber}</Table.Cell>
              <Table.Cell>{book.author.name}</Table.Cell>
              <Table.Cell>{book.author.surname}</Table.Cell>
              <Table.Cell>{book.unitPrice}</Table.Cell>
              <Table.Cell>{book.year}</Table.Cell>
             <Table.Cell><Button onClick={()=>handleAddToCart(book)}> Sepete Ekle </Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
