import React from 'react';
import { Link } from 'react-router-dom';
import {Container, HomeSectionLink} from "./HomeSection.styled";

const HomeSection: React.FC = () => {
    return (
        <Container>
            <Link to="/peoples">
                <HomeSectionLink>
                    Персонажи
                </HomeSectionLink>
            </Link>
            <Link to="/favorites">
                <HomeSectionLink>
                    Избранное
                </HomeSectionLink>
            </Link>
        </Container>
    );
}

export default HomeSection;