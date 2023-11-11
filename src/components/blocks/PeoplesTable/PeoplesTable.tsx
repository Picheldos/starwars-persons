import React, { useEffect, useRef } from 'react';
import {
    Container,
    PeoplesTableRow,
    PeoplesTableRowItem,
    PeoplesTableRowItemLink,
    PeoplesTableRowWrapper
} from "./PeoplesTable.styled";
import { People } from "../../../../interfaces/people";
import Button from "../../ui/Button/Button";
import usePeoplesStore from "../../../store/PeoplesStore";
import { observer } from "mobx-react-lite";
import Loading from "../Loading/Loading";

interface PeoplesTableProps {
    peoples: People[];
    parameters: string[];
    fetchMore?: () => void;
    detail?: boolean;
}

const PeoplesTable: React.FC<PeoplesTableProps> = observer((
        { peoples, fetchMore, parameters, detail }
    ) => {
    const { addFavorite, removeFavorite, isFavorite, isLoading } = usePeoplesStore;

    const onClickHandler = (people: People) => {
        isFavorite(people) ? removeFavorite(people) : addFavorite(people);
    };

    const btnText = (people: People) => {
        return isFavorite(people) ? 'Remove' : 'Add favorite';
    };

    const tableWrapperRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        const tableWrapper = tableWrapperRef.current;

        if (tableWrapper) {
            const { scrollTop, clientHeight, scrollHeight } = tableWrapper;
            const triggerHeight = 10;

            if (scrollTop + clientHeight >= scrollHeight - triggerHeight && fetchMore) {
                fetchMore();
            }
        }
    };

    useEffect(() => {
        const tableWrapper = tableWrapperRef.current;

        if (tableWrapper) {
            tableWrapper.addEventListener('scroll', handleScroll);

            return () => {
                tableWrapper.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll]);

    const getPersonId = (people: People) => {
        const splitUrl = people.url.split('/');
        return `/peoples/${splitUrl[splitUrl.length - 2]}`;
    }

    return (
        <Container>
            <PeoplesTableRow className={'topRow'}>
                {parameters.map((parameter) => (
                    <PeoplesTableRowItem key={parameter} dangerouslySetInnerHTML={{ __html: parameter }} />
                ))}
            </PeoplesTableRow>
            <PeoplesTableRowWrapper ref={tableWrapperRef}>
                {peoples.map((people) => !detail ? (
                        <PeoplesTableRow key={people.name}>
                            <PeoplesTableRowItemLink to={getPersonId(people)} dangerouslySetInnerHTML={{ __html: people.name }} />
                            <PeoplesTableRowItemLink to={getPersonId(people)} dangerouslySetInnerHTML={{ __html: people.height }} />
                            <PeoplesTableRowItemLink to={getPersonId(people)} dangerouslySetInnerHTML={{ __html: people.mass }} />
                            <PeoplesTableRowItemLink to={getPersonId(people)} dangerouslySetInnerHTML={{ __html: people.hair_color }} />
                            <PeoplesTableRowItem>
                                <Button text={btnText(people)} onClick={() => onClickHandler(people)} />
                            </PeoplesTableRowItem>
                        </PeoplesTableRow>
                    ) :
                    (
                        <PeoplesTableRow key={people.name} detail={true}>
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.name }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.height }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.mass }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.hair_color }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.skin_color }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.eye_color }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.birth_year }} />
                            <PeoplesTableRowItem dangerouslySetInnerHTML={{ __html: people.gender }} />
                            {!isFavorite(people) &&
                                <PeoplesTableRowItem>
                                    <Button text={btnText(people)} onClick={() => onClickHandler(people)}/>
                                </PeoplesTableRowItem>
                            }
                        </PeoplesTableRow>
                    )

                )}
            </PeoplesTableRowWrapper>
            {isLoading && <Loading />}
        </Container>
    );
});

export default PeoplesTable;
