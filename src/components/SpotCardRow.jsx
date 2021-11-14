import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

function SpotCardRow(props) {
    const { data } = props;

    return (
        <Grid item xs={6} md={3} sx={{ height: 420 }}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%', height: 250, display: { xs: 'none', sm: 'block' } }}
                        image={data.Picture.PictureUrl1}
                    />
                    <CardContent sx={{
                        mx: 2,
                    }} style={{ whiteSpace: 'nowrap' }}
                    >
                        <Box sx={{ flexWrap: 'nowrap' }}>
                            <Typography position='static' style={{ flex: 1, display: 'inline', fontSize: 20, fontWeight: 'bold' }}>
                                {data.Name}
                            </Typography>
                            <Typography position='static' style={{ display: 'inline', fontSize: 15, color: '#C4C4C4' }}>
                                {data.Address.slice(0, 3)}
                            </Typography>
                        </Box>

                        <Box variant="body2" color="text.secondary" paragraph sx={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        }}>
                            {data.Description}
                        </Box>
                    </CardContent>


                </Card>
            </CardActionArea>
        </Grid >
    );
}

SpotCardRow.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
};

export default SpotCardRow;