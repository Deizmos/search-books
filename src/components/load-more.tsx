import { useDispatch } from 'react-redux';

import {
  Button,
  styled,
} from '@mui/material';

import { setStartIndex } from '../store/reducers/books';

const CustomizedDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
});

const CustomizedButton = styled(Button)(({ theme }) => ({
    fontSize: 24,
    color: "#000",
    border: '1px solid #000',
    textTransform: 'none',

    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
}));

function LoadMore(): React.ReactElement {
    const dispatch = useDispatch();

    return <CustomizedDiv>
        <CustomizedButton onClick={() => { dispatch(setStartIndex()) }}>Load more</CustomizedButton>
    </CustomizedDiv>
};

export default LoadMore;