import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import usePeoplesStore from '../../../store/PeoplesStore';
import PeoplesTable from "../../blocks/PeoplesTable/PeoplesTable";
import {Container, PeopleSectionWrapper} from "./PeoplesSection.styled";
import SearchPersons from "../../blocks/SearchPersons/SearchPersons";

const PeoplesSection: React.FC = observer(() => {
    const { fetchPeoples, fetchMorePeoples, peoples } = usePeoplesStore;
    const parameters = ['name', 'height', 'mass', 'hair_color', 'Add Favorite/Remove favorite'];


    useEffect(() => {
        !peoples.length && fetchPeoples();
    }, [fetchPeoples]);

    return (
            <Container>
                <PeopleSectionWrapper>
                    <PeoplesTable parameters={parameters} peoples={peoples} fetchMore={fetchMorePeoples} />
                    <SearchPersons />
                </PeopleSectionWrapper>
            </Container>
    );
});

export default PeoplesSection;