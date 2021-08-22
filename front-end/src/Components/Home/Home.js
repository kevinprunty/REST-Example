import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <Link to="/poke">Pokemon</Link>
        </div>
    )
}

export default Home
