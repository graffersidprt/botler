import  CheckBox, { CheckboxProps } from '@mui/material/Checkbox';
import Button, { ButtonProps } from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';

const CustomCheckBox = styled(CheckBox)<CheckboxProps>(({ theme }) => ({
    marginTop: 20,
    marginLeft: 20,
    color: theme.palette.success.main,
        '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.2),
        },
        '&:active': {
            backgroundColor: alpha(theme.palette.success.main, 0.3),
        },
}));


export default CustomCheckBox;
