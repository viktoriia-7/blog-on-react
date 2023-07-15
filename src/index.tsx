import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'Container/App/App'
import { Provider } from 'react-redux'
import { store } from 'assets/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
