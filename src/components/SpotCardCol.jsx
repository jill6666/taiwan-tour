import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@material-ui/core';

function SpotCardCol(props) {
    const { data } = props;

    return (

        <Grid item xs={10} sm={3.75} >

            <Card sx={{ margin: '30px' }}>
                <CardActionArea component="a" href="#">
                    <Box sx={{
                        height: '160px',
                        display: 'flex'
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { sm: 'block' } }}
                            image={data.Picture.PictureUrl1}
                        />
                        <CardContent sx={{
                            flex: 1, textOverflow: 'ellipsis', my: 2,
                            overflow: 'hidden',
                        }}>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontSize: 20, fontWeight: 'bold' }}>
                                {data.Name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph >
                                {data.DescriptionDetail}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>

        </Grid>

    );
}

SpotCardCol.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default SpotCardCol;