import React from 'react';
import { Title ,Form ,Repositories} from './styles';
import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const Dashboard:React.FC = () => {


    return(
        <>
        <img src={logoImg} alt="Github Explore"/>
        <Title>Explore repositorios no Github </Title>
        <Form action="">
            
            <input placeholder= "Digite o nome do repositório"></input>
            <button type="submit"> Pesquisar </button>
            </Form>

        <Repositories>
        <a href="teste">
            <img
            src="https://avatars.githubusercontent.com/u/7657883?v=4"
            alt="Pedro Cardoso"
            />
            <div>
                <strong>Template Absam</strong>
                <p>Template de exemplo para github actions </p>
            </div>
            <FiChevronRight size={20} />

        </a>

              <a href="teste">
            <img
            src="https://avatars.githubusercontent.com/u/7657883?v=4"
            alt="Pedro Cardoso"
            />
            <div>
                <strong>Template Absam</strong>
                <p>Template de exemplo para github actions </p>
            </div>
            <FiChevronRight size={20} />

        </a>
        
              <a href="teste">
            <img
            src="https://avatars.githubusercontent.com/u/7657883?v=4"
            alt="Pedro Cardoso"
            />
            <div>
                <strong>Template Absam</strong>
                <p>Template de exemplo para github actions </p>
            </div>
            <FiChevronRight size={20} />

        </a>
        </Repositories>
        
        </>
    ) 

};

export default Dashboard;
