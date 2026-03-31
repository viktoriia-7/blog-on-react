import React, { useState, ChangeEvent, FormEvent } from 'react'
import './SubscribeForm.scss'

const SubscribeForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setName('')
        setEmail('')
    }

    return (
        <div className="subscribe-form">
            <div className="form-container">
                <h2 className="text-subscribe">
                    Subscribe now to get the latest updates in your inbox!
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Enter your E-mail"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-subscribe">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SubscribeForm
