import React from 'react';
import { observer } from 'mobx-react-lite';
import PeoplesStore from '../../../store/PeoplesStore';
import {Container} from "./FavoritesSection.styled";
import PeoplesTable from "../../blocks/PeoplesTable/PeoplesTable";

const FavoritesSection = observer(() => {
    const parameters = ['name', 'height', 'mass', 'hair_color', 'Add Favorite/Remove favorite'];
    const { favorites } = PeoplesStore;

    return (
        <Container>
            <PeoplesTable peoples={favorites} parameters={parameters} />
        </Container>
    );
});

export default FavoritesSection;