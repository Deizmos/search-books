import { useSelector } from 'react-redux';

import {
  styled,
  Typography,
} from '@mui/material';

import { RootState } from '../store/store';

const CustomizedTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    padding: '10px 0',
    fontWeight: 'bold',
    fontSize: 24,

    [theme.breakpoints.down('md')]: {
        fontSize: 16,
    }
}));

function FoundResults(): React.ReactElement {
    const totalItems = useSelector((state: RootState) => state.books.totalItems);

    return <CustomizedTypography>
        Found {totalItems} results
    </CustomizedTypography>
}

export default FoundResults;