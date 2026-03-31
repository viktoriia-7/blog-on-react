import { Card, CardContent, Typography } from '@mui/material'
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
            <Typography variant="h5" component={'h2'}>
                Reviews:
            </Typography>
            {review.map(({ name, text }, i) => (
                <Card
                    variant="outlined"
                    sx={{
                        margin: '20px 0',
                        width: '700px',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div className="name-rewiew">{name}:</div>
                        <div className="text-rewiew">{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form
                onSubmit={onSend}
                style={{ display: 'flex', flexDirection: 'column' }}
            ></form>
        </div>
    )
}

export default Reviews
