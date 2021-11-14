import * as React from 'react';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Paper, Grid, TextField, Button, createTheme, Typography } from '@material-ui/core';
import Background from '../assets/background.png';
import Filter from '../assets/filter.png';


const theme = createTheme({
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
    }
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  borderRadius: '6px',
  height: '60px',
}));

const useStyles = makeStyles({
  paper: {
    width: '100%',
    height: '100%',
  },
});


const MainSearch = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper
        className={classes.paper}
        sx={{
          position: 'relative',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${Background})`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        />
        <Grid container>
          <Grid item xs={1} sm={3} />
          <Grid item container xs={10} sm={6} sx={{
            position: 'relative',
            pt: '250px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'nowrap'
          }} >
            <Grid item xs={6} sm={8}>
              <Search>
                <TextField fullWidth variant="filled" InputProps={{ disableUnderline: true, fontSize: 50 }} autoFocus={true} />
              </Search>
            </Grid>

            <Button
              variant="contained"
              style={{ backgroundColor: '#fff', color: '#ff5358', fontSize: 17, fontWeight: 'bold' }}
              xs={3} sm={1.5}
              startIcon={<SearchIcon />}>
              <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
                搜尋
              </Typography>
            </Button>

            <Button
              variant="contained"
              style={{ backgroundColor: '#fff', color: '#ff5358', fontSize: 17, fontWeight: 'bold' }}
              sx={{
                paddingX: '30px',
                marginLeft: '15px'
              }}
            >
              <img alt='filterIcon' src={Filter} width='22px' />
              <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
                篩選
              </Typography>

            </Button>
          </Grid>
          <Grid item xs={1} sm={3} />
        </Grid>
      </Paper>
    </ThemeProvider >
  );
}

export default MainSearch;