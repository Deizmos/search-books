import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Container,
  styled,
  Typography,
} from '@mui/material';

import backgroundImage from '../../assets/image/Books.png';
import Search from '../../components/search';
import Select from '../../components/select';
import { setParam } from '../../store/reducers/params';
import { RootState } from '../../store/store';

const CustomizedContainer = styled(Container)(({ theme }) => ({
    backgroundImage: `url(${backgroundImage})`,
    minHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundSize: 'cover',
    padding: 20,
    [theme.breakpoints.up('xs')]: {
        maxWidth: '100%',
    }
}));

const CustomizedTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    paddingBottom: 20,
    fontWeight: 'bolder',

    [theme.breakpoints.down('md')]: {
        fontSize: 28,
    },
}));

const CustomizedBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    }
}));

export const CATEGORIES = [
    {
        value: 'all',
        label: 'All',
    },
    {
        value: 'art',
        label: 'Art',
    },
    {
        value: 'biography',
        label: 'Biography',
    },
    {
        value: 'computers',
        label: 'Computers',
    },
    {
        value: 'history',
        label: 'History',
    },
    {
        value: 'medical',
        label: 'Medical',
    },
    {
        value: 'poetry',
        label: 'Poetry',
    },
];

const SORTING = [
    {
        value: 'relevance',
        label: 'Relevance',
    },
    {
        value: 'newest',
        label: 'Newest',
    },
];

function Header(): React.ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectedCategoria = useSelector((state: RootState) => state.params.selectedCategoria);
    const sort = useSelector((state: RootState) => state.params.sort);
    const search = useSelector((state: RootState) => state.params.search);

    useEffect(() => {
        navigate('/');
    }, [selectedCategoria, sort, search]);

    return <CustomizedContainer >
        <CustomizedTypography variant="h3" >
            Search for books
        </CustomizedTypography>
        <Search
            onClick={(value) => dispatch(setParam({ key: 'search', value }))}
        />
        <CustomizedBox>
            <Select
                id='Categoties'
                onChange={(value) => dispatch(setParam({ key: 'selectedCategoria', value }))}
                value={selectedCategoria}
                label="Categories"
                options={CATEGORIES}
            />
            <Select
                id='Sorting by'
                onChange={(value) => dispatch(setParam({ key: 'sort', value }))}
                value={sort}
                label="Sorting by"
                options={SORTING}
            />
        </CustomizedBox>
    </CustomizedContainer>
}

export default Header;

