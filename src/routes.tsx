import { Signup, Login, Todos, NotFound } from './views'

// other
import { FC } from "react"

/*** Types & Interfaces ***/
interface Route {
    key: string,
    title: string,
    path: string,
    // enabled: boolean,
    element: FC<{}>
}
/*** End ***/

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Signup',
        path: '/',
        // enabled: true,
        element: Signup
    },
    {
        key: 'home-route',
        title: 'Todos',
        path: '/todos',
        // enabled: true,
        element: Todos
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        // enabled: true,
        element: Login
    },
    {
        key: 'todos-route',
        title: 'Todos',
        path: '/todos',
        // enabled: true,
        element: Todos
    },
    {
        key: 'notFound-route',
        title: 'NotFound',
        path: '*',
        // enabled: true,
        element: NotFound
    }
]