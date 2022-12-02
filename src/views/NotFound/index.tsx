import { useNavigate } from "react-router-dom"
import './notfound.sass'

const NotFound = () => {
    const navigate = useNavigate();
    
    return (
        <section id='notfound'>
            <code className='_404message'>404</code>
            <div>
                There's nothing here.
            </div>
            <div>
                Find what you are looking for on our Homepage.
            </div>
            <a
                onClick={() => navigate(`/`)}
            >
                Todo List
            </a>
        </section>
    );
};

export default NotFound