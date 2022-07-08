import { useState } from 'react';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMui,
  styled,
} from '@mui/material';

const CustomizedBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    }
}));

const CustomizedInputLabel = styled(InputLabel)({
    color: 'white',
});

const CustomizedFormControl = styled(FormControl)(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: 4,

    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
}));

interface Option {
    value: string,
    label: string,
};

interface SelectProps {
    onChange?: ((val: string) => void) | undefined
    value: string,
    options: Option[],
    label?: string,
    id: string,
};

function Select({ onChange, value, options, label, id, }: SelectProps): React.ReactElement {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return <CustomizedBox>
        {label && <CustomizedInputLabel id={id} onClick={handleOpen}>{label}</CustomizedInputLabel>}
        <CustomizedFormControl required sx={{ m: 1, minWidth: 120 }}>
            <SelectMui
                labelId={id}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
            >
                {options.map((option) => <MenuItem
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </MenuItem>)}

            </SelectMui>
        </CustomizedFormControl>
    </CustomizedBox>
}

export default Select;