import './style.css'
import { Link } from 'react-router-dom'


function Home ( { Members } ) {
    
    return (
        <div>
            <ul>
                {Members.map((member) => 
                    member.type === 'pf' ? (
                        <li>
                            <Link className='links' to={`/customer/${member.id}`}>{member.name}</Link>
                        </li>
                    ) : (
                        <li>
                            <Link className='links' to={`/company/${member.id}`}>{member.name}</Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Home;