

import { Link, useParams } from 'react-router-dom';
import { members } from "../../members";

function Company() {

    const { id } = useParams();


    const member = members.find(element => element.id === id)
    return (
        <div>
            <h1>Detalhes da Empresa</h1>

            <p >Nome da Empresa: <span className='name_pf_pj'>{member && member.name}</span></p>

            <Link className='links_back' to="/">Voltar</Link>
        </div>
    )
}

export default Company;