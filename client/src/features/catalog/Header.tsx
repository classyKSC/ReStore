import { AppBar, Toolbar, Typography, Switch } from "@mui/material/index";

interface Props {
    darkMode: boolean,
    switchMode: object
}
export default function Header({ darkMode, switchMode }: Props) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <AppBar position='static' sx={{mb:4} }>
            <Toolbar>
                <Typography variant='h6'>RE-STORE</Typography>
                <Switch {...label} checked={darkMode} onChange={switchMode} />
            </Toolbar>
            
        </AppBar>
    )
}