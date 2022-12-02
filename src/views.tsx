import { lazy } from "react"

export const Signup = lazy(() => import("./views/Signup"))
export const Login = lazy(() => import("./views/Login"))
export const Todos = lazy(() => import("./views/Todos"))
export const NotFound = lazy(() => import("./views/NotFound"))