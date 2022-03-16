import React, { useMemo } from 'react';
import { getHeroById } from '../../selectors/getHeroById';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

export const HeroScreen = () => {

    const {heroeId} = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if(!hero) {
        return <Navigate to="/" />
    }

    const imagePath = `/assets/${hero.id}.jpg`;

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imagePath} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
                    <li className="list-group-item"> <b>First Appearance: </b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-5">Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
