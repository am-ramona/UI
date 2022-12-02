import { useNavigate, Link } from 'react-router-dom'
import { TodoIcon } from '../../assets/icons';
import './login.sass';

const Login = () => {
    const navigate = useNavigate();

    const navigateTodos = () => {
      navigate('/todos');
    };

    return (
        <section id="login" className='wrapper'>
            <span className="logo"><TodoIcon /></span>

            <hgroup>
                <h2 className="title">Welcome back!</h2>
                <p>Log in to continue. </p>
            </hgroup>

            <form id='loginForm' className='formPosition'>
                <input type='text'
                    id="email"
                    placeholder="Email"
                />
                <input type='text'
                    id="password"
                    placeholder="Password"
                />
            </form>

            <span className='note'>Don't have an account? <Link to="/">Sign up</Link>.</span>
            <button className='authButton' onClick={navigateTodos}>Log in</button>
        </section>
    )
}

export default Login