import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import styled from '@emotion/styled';
import {
  Box,
  CircularProgress,
  Container,
} from '@mui/material';

import CardProduct from '../components/card';
import FoundResults from '../components/found-results';
import LoadMore from '../components/load-more';
import { getBooks } from '../store/api/books-api';
import {
  setList,
  setLoadingBooks,
  setZeroStartIndex,
} from '../store/reducers/books';
import { RootState } from '../store/store';

const CustomizedContainer = styled(Container)({
    display: 'flex',
    flexWrap: 'wrap',
})

const CustomizedBox = styled(Box)({
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})


function BooksList(): React.ReactElement {
    const booksList = useSelector((state: RootState) => state.books.list);
    const isLoading = useSelector((state: RootState) => state.books.isLoading);
    const totalItems = useSelector((state: RootState) => state.books.totalItems);

    const dispatch = useDispatch();

    const selectedCategoria = useSelector((state: RootState) => state.params.selectedCategoria)
    const sort = useSelector((state: RootState) => state.params.sort)
    const search = useSelector((state: RootState) => state.params.search)

    const startIndex = useSelector((state: RootState) => state.books.startIndex);

    useEffect(() => {
        dispatch(setLoadingBooks(true));
        getBooks({ search, categoria: selectedCategoria, sort, startIndex })
            .then((resp) => {
                dispatch(setList(resp));
                dispatch(setLoadingBooks(false));
            }, (error) => {
                alert(error.message)
                dispatch(setLoadingBooks(false));
            });
    }, [startIndex]);

    useEffect(() => {
        dispatch(setLoadingBooks(true));
        if (startIndex) dispatch(setZeroStartIndex())
        else getBooks({ search, categoria: selectedCategoria, sort, startIndex })
            .then((resp) => {
                dispatch(setList(resp))
                dispatch(setLoadingBooks(false));
            }, (error) => {
                alert(error.message)
                dispatch(setLoadingBooks(false));
            });
    }, [selectedCategoria, sort, search]);

    return <Container>
        {!!booksList.length && <>
            <FoundResults />
            <CustomizedContainer>
                {booksList.map((book) => <CardProduct bookInfo={book} key={book.id} />)}
            </CustomizedContainer>
            {booksList.length < totalItems && <LoadMore />}
        </>
        }
        {isLoading && <CustomizedBox sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <CircularProgress />
        </CustomizedBox>
        }
        {!isLoading && !booksList.length && <CustomizedBox sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            No results
        </CustomizedBox>}
    </Container >
}

export default BooksList;