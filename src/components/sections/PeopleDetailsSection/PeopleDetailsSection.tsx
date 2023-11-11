import React, {useEffect} from 'react';
import {Container, PeopleDetailsSectionTitle} from "./PeopleDetailsSection.styled";
import {observer} from "mobx-react-lite";
import usePeoplesStore from "../../../store/PeoplesStore";
import PeoplesTable from "../../blocks/PeoplesTable/PeoplesTable";


interface PeopleDetailsSectionProps {

}

const PeopleDetailsSection: React.FC<PeopleDetailsSectionProps> = observer(({}) => {
    const parameters = [
        'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color',
        'birth_year', 'gender', 'Add Favorite/Remove favorite'
    ];
    const { fetchCharacter, character, isFavorite } = usePeoplesStore;

    useEffect(() => {
        const splitUrl = window.location.href.split('/');
        const currentId = splitUrl[splitUrl.length - 1];
        fetchCharacter(currentId);

    }, [fetchCharacter])

    const checkFavorite = () => {
        if (character && isFavorite(character)) {
            parameters.pop()
        }
        return parameters
    }

    return (
        <Container>
            {character && <PeopleDetailsSectionTitle dangerouslySetInnerHTML={{__html: character.name}}/>}
            {character && <PeoplesTable detail parameters={checkFavorite()} peoples={[character]}/>}
        </Container>
    );
});

export default PeopleDetailsSection;