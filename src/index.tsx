import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello world</h1>
}

const App = () => {
    return <Title />
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
