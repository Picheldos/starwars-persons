import React, {useCallback, useEffect, useState} from 'react';
import {Container, SearchPersonsList, SearchPersonsListItem} from "./SearchPersons.styled";
import Input from "../../ui/Input/Input";
import {searchPersons} from "../../../lib/api";
import {People} from "../../../../interfaces/people";
import debounce from 'lodash.debounce';
import Button from "../../ui/Button/Button";
import usePeoplesStore from "../../../store/PeoplesStore";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

interface SearchPersonsProps {

}

const SearchPersons: React.FC<SearchPersonsProps> = observer(({}) => {
    const [results, setResults] = useState<People[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showList, setShowList] = useState(false);
    const { addFavorite, removeFavorite, isFavorite, setLoading } = usePeoplesStore;

    const fetchData = useCallback(
        debounce(async (query: string) => {
            if (query.trim() === '') {
                setShowList(false);
                setTimeout(() => setResults([]), 350);
                return
            }
            setLoading(true);

            const searchResponse = await searchPersons(query);
            setResults(searchResponse);

            setLoading(false);
            setShowList(true);
        }, 700),
        []
    );

    useEffect(() => {
        fetchData(searchQuery);
    }, [searchQuery, fetchData]);


    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const onClickHandler = (people: People) => {
        isFavorite(people) ? removeFavorite(people) : addFavorite(people);
    };

    const btnText = (people: People) => {
        return isFavorite(people) ? 'Remove' : 'Add favorite';
    };

    const getPersonId = (people: People) => {
        const splitUrl = people.url.split('/');
        return `/peoples/${splitUrl[splitUrl.length - 2]}`;
    }

    return (
        <Container>
            <Input onChange={inputHandler} placeholder={'Enter your query...'}/>
            <SearchPersonsList show={showList}>
                {results.map((person) =>
                    <SearchPersonsListItem key={person.name}>
                        <Link to={getPersonId(person)}>
                            <div>{person.name}</div>
                        </Link>
                        <Button text={btnText(person)} onClick={() => onClickHandler(person)} />
                    </SearchPersonsListItem>

                )}
            </SearchPersonsList>
        </Container>
    );
});

export default SearchPersons;