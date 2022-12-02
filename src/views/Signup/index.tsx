import { useNavigate, Link } from 'react-router-dom'
import { TodoIcon } from '../../assets/icons'
import './signup.sass'

const Signup = () => {
    const navigate = useNavigate();

  const navigateTodos = () => {
    navigate('/todos');
  };

    return (
        <section id="signup" className='wrapper'>
            <span className="logo"><TodoIcon /></span>

            <hgroup>
                <h2 className="title">Welcome!</h2>
                <p>Sign up to start using Simpledo today. </p>
            </hgroup>

            <form id='signupForm' className='formPosition'>
                <input type='text'
                    id="fullName"
                    placeholder="Full Name"
                />
                <input type='text'
                    id="email"
                    placeholder="Email"
                />
                <input type='text'
                    id="password"
                    placeholder="Password"
                />
            </form>

            <span className='note'>Do have an account? <Link to="/login">Sign in</Link>.</span>
            <button className='authButton' onClick={navigateTodos}>Sign Up</button>
        </section>
    )
}

export default Signup