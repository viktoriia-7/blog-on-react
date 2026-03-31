import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Bella Doe',
            text: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez',
        },
        {
            name: 'Jane Air',
            text: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez',
        },
        {
            name: 'Ann Taylor',
            text: 'That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez',
        },
    ]

    const [review, setReview] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div>
            <Typography variant="h4" component={'h2'}>
                Reviews
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card 
                    variant="outlined"
                    sx={{
                        margin: '20px 0',
                        width:'700px',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div className="name-rewiew">{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form
                onSubmit={onSend}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        className="custom-textarea"
                        minRows={6}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Reviews
