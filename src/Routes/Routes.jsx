import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Users from '../components/Users'
import Root from '../components/Root';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <App />,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/signUP',
                element: <SignUp />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/users',
                element: <Users />,
                loader: () => fetch('http://localhost:5000/user')
            }
            
        ]
    }
])

export default routes;