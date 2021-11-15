import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import SeloTextInput from '../utilities/customFormControls/SeloTextInput'

export default function BookAdd() {

    const initialValues = { bookName: "", unitPrice: 10 }

    const schema = Yup.object({
        bookName: Yup.string().required("Ürün Adı Zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı")

    });

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
           
            <Form className="ui form">
                <SeloTextInput name="bookName" placeholder="Kitap adı" />
                <SeloTextInput name="unitPrice" placeholder="Kitap fiyatı" />
                <Button color="green" type="submit">Ekle</Button>
            </Form>

        </Formik>

    );
}



/*{
    "authorId": 0,
    "bookName": "string",
    "pageNumber": 0,
    "unitPrice": 0,
    "year": "2021-08-24T07:36:22.195Z",
    "author": {
      "id": 0,
      "name": "string",
      "surname": "string"
    }
  } */