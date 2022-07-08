import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@mui/material';

import { bookType } from '../store/types';

const CustomizedCard = styled(Card)(({ theme }) => ({
    width: 250,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#f3f2f1',
    cursor: 'pointer',
    marginRight: 'calc((100% - 1000px) / 3)',

    ':nth-of-type(4n)': {
        marginRight: 0,
    },

    [theme.breakpoints.up('xs')]: {
        marginRight: 'calc((100% - 750px) / 2)',

        ':nth-of-type(4n)': {
            marginRight: 'calc((100% - 750px) / 2)',
        },

        ':nth-of-type(3n)': {
            marginRight: 0,
        },
    },

    [theme.breakpoints.down('md')]: {
        width: 160,
        marginRight: 'calc((100% - 480px) / 2)',

        ':nth-of-type(4n)': {
            marginRight: 'calc((100% - 480px) / 2)',
        },
    },

    [theme.breakpoints.down('md')]: {
        width: "100%",
        maxWidth: 300,
        marginRight: 'auto',
        marginLeft: 'auto',

        ':nth-of-type(4n)': {
            marginRight: 'auto',
            marginLeft: 'auto',
        },

        ':nth-of-type(3n)': {
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    },
}));

const CustomizedCategories = styled(Typography)(({ theme }) => ({
    color: '#b9b6bc',
    textDecoration: 'underline',
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
}));

const CustomizedTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
}));

const CustomizedAuthor = styled(Typography)(({ theme }) => ({
    color: '#b9b6bc',
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
}));

interface CardProductProps {
    bookInfo: bookType
};

function CardProduct({ bookInfo }: CardProductProps): React.ReactElement {
    const navigate = useNavigate();

    return (<CustomizedCard >
        <CardActionArea onClick={() => {
            navigate(`/${bookInfo.id}`)
        }}>
            <CardMedia
                component="img"
                height="150"
                image={bookInfo?.volumeInfo?.imageLinks?.thumbnail}
                alt=""
            />
            <CardContent>
                <CustomizedCategories >
                    {bookInfo?.volumeInfo.categories}
                </CustomizedCategories>
                <CustomizedTitle >
                    {bookInfo?.volumeInfo.title}
                </CustomizedTitle>
                <CustomizedAuthor >
                    {bookInfo?.volumeInfo.authors}
                </CustomizedAuthor>
            </CardContent>
        </CardActionArea>
    </CustomizedCard>
    )
}

export default CardProduct;