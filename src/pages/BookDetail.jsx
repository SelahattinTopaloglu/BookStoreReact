import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button, Card, Image } from 'semantic-ui-react'
import BookService from '../services/bookService';

export default function BookDetail() {
    let { id } = useParams()

    const [book, setBook] = useState(null);

    useEffect(() => {
        let bookService = new BookService()
        bookService.getByBookId(id).then(result => setBook(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid >
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'  
                        />
                        {book && <><Card.Header>{book.bookName}</Card.Header>
                        <Card.Meta>{book.author.name} {book.author.surname}</Card.Meta></>}
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>

            </Card.Group>
        </div>
    )
}
