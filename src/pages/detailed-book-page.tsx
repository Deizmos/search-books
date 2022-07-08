import {
  useEffect,
  useMemo,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Breadcrumbs,
  CircularProgress,
  Container,
  Link,
  styled,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

import { CATEGORIES } from '../containers/header/header';
import { getBook } from '../store/api/book-api';
import {
  setBook,
  setLoadingBook,
} from '../store/reducers/book';
import { RootState } from '../store/store';

const CustomizedContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignSelf: 'stretch',
    height: '100%',
    padding: 0,
    margin: 20,

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    }
}));

const CustomizedBox = styled(Box)(({ theme, display }) => ({
    paddingLeft: 20,
    width: '50%',
    backgroundColor: display === 'flex' ? '#e2e2e2' : 'transparent',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        backgroundColor: 'transparent',
        minHeight: 250,
        paddingLeft: 0,
        padding: '0 10px',
    }
}));

const CustomizedLinkCrumbs = styled(Link)({
    color: 'gray',
});

const CustomizedTypography = styled(Typography)({
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
});

const CustomizedLink = styled(Link)({
    color: 'gray',
    textDecorationColor: 'gray',
});


const CustomizedBreadcrumbs = styled(Breadcrumbs)({
    marginTop: 40,
    marginBottom: 40,
});

const CustomizedDiv = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 200,
    marginTop: 20,
    border: '1px solid #000',
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    padding: '10px 15px',

    [theme.breakpoints.down('md')]: {
        padding: 5,
    }
}));

const CustomizedImage = styled('img')({
    height: '70%',
    maxHeight: 300,
    boxShadow: '5px 5px 10px #919191',
});

const CustomizedBoxLoading = styled(Box)({
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});


function DetailedPageBook(): React.ReactElement {
    const dispatch = useDispatch();

    const { id } = useParams();
    const book = useSelector((state: RootState) => state.book.data);
    const isLoading = useSelector((state: RootState) => state.book.isLoading);
    const selectedCategoria = useSelector((state: RootState) => state.params.selectedCategoria);

    const selectedCategoriaLabel = useMemo(() => CATEGORIES.find((c) => c.value === selectedCategoria)?.label, [selectedCategoria]);

    useEffect(() => {
        dispatch(setLoadingBook(true));
        id && getBook({ id })
            .then((resp) => {
                dispatch(setBook(resp))
                dispatch(setLoadingBook(false));
            }, (error) => {
                alert(error.message)
                dispatch(setLoadingBook(false));
            });
    }, [id]);


    return isLoading
        ? <CustomizedBoxLoading sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <CircularProgress />
        </CustomizedBoxLoading>
        : <CustomizedContainer>
            <CustomizedBox
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {book?.volumeInfo?.imageLinks?.thumbnail
                    ? <CustomizedImage src={book?.volumeInfo?.imageLinks?.thumbnail} />
                    : 'NO COVER'
                }
            </CustomizedBox>
            <CustomizedBox>
                <CustomizedBreadcrumbs aria-label="breadcrumb">2
                    <CustomizedLinkCrumbs underline="hover" href='#'>
                        {selectedCategoriaLabel}
                    </CustomizedLinkCrumbs>
                    <CustomizedLinkCrumbs underline="hover" href='#'>
                        {book?.volumeInfo?.title}
                    </CustomizedLinkCrumbs>

                </CustomizedBreadcrumbs>
                <CustomizedTypography >
                    {book?.volumeInfo?.title}
                </CustomizedTypography>
                <CustomizedLink >
                    {book?.volumeInfo?.authors}
                </CustomizedLink>

                {book?.volumeInfo?.description &&
                    <CustomizedDiv dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }} />
                }
            </CustomizedBox>
        </CustomizedContainer>
}
export default DetailedPageBook;