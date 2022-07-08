import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton,
  InputBase,
  Paper,
  styled,
} from '@mui/material';

const CustomizedPaper = styled(Paper)(({ theme }) => ({
    width: 500,
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
}));

interface SearchType {
    onClick?: ((val: string) => void) | undefined
};

function Search({ onClick }: SearchType): React.ReactElement {
    const [search, setSearch] = useState("");

    return <CustomizedPaper elevation={3} >
        <InputBase
            sx={{ width: 3 / 4, ml: 1, flex: 1 }}
            placeholder="Search Books"
            inputProps={{ 'aria-label': 'search books' }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onClick && onClick(search)
                }
            }}
        />
        <IconButton type="submit" sx={{ p: '5px' }} aria-label="search"
            onClick={(e) => onClick && onClick(search)}>
            <SearchIcon />
        </IconButton>
    </CustomizedPaper >
}

export default Search;