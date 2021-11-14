import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Box } from '@material-ui/core';
import Grid from '@mui/material/Grid';
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyApMSStKe9v_1GDhIexU4Bto68BLn2sMTo"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }} >

    <Grid container xs={12}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
    </Grid>
        </Box>
  ) : <></>
}

export default Map;