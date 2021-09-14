import React from 'react';
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
        <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ad, debitis dolorem impedit in iste natus repellendus. Ab adipisci
                aperiam assumenda aut cupiditate doloremque dolores eius eos exercitationem
                explicabo facilis fuga illo incidunt ipsa ipsum iste itaque iure libero minima,
                neque officiis pariatur ratione sapiente, tempore tenetur unde voluptas voluptatibus?
                Aliquam asperiores cum debitis maiores perferendis quam quibusdam. Cum quis quos ut.
            </p>
            <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}