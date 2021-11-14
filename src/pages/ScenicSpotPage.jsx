import { Grid, Toolbar, Typography, Button, CircularProgress, createTheme, ThemeProvider } from '@material-ui/core';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import MainSearch from '../components/MainSearch';
import Divider from '@mui/material/Divider';
import SpotCardCol from '../components/SpotCardCol';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import ToTop from '../assets/totop.png';
import Zoom from "@material-ui/core/Zoom";
import Footer from '../components/Footer';
import SpotCardRow from '../components/SpotCardRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import spotLabel from '../assets/spotLabel.png';
import busIcon from '../assets/busIcon.png';
import feeIcon from '../assets/feeIcon.png';
import locationIcon from '../assets/locationIcon.png';
import timeIcon from '../assets/timeIcon.png';
import Map from '../components/Map';
import Logo from '../assets/logo.png';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 100, right: 70 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
    },
    paper: {
        width: '100%',
        height: '500px',
        backgroundColor: 'grey',
    }
}));

const mockdata = {
    "ID": "C1_315080500H_000068",
    "Name": "紫坪",
    "DescriptionDetail": "紫坪位在綠島最南方，緊鄰「綠島露營區」。從露營區旁的步道，可通往海岸邊的潟湖「紫坪」。「紫坪」是一處由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。外海儘管浪濤洶湧，內湖依然波平如鏡，宛若沉睡的湖水，清淺的躺在外珊瑚礁岩與內珊瑚貝砂灘間；水芫花灌叢身影倒映於平靜無波的水面上，潔白柔細的白砂鋪陳水底。熱帶海岸旖旎風情，盡在不言中。",
    "Description": "紫坪位在綠島最南方，從附近的步道，可通往海岸邊的潟湖。此處是由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。",
    "Phone": "886-8-9672026",
    "Address": "臺東縣951綠島鄉溫泉路256號",
    "ZipCode": "951",
    "TravelInfo": "南下：於花蓮火車站前搭乘花蓮客運，往豐濱、靜浦，或是台東方向班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。北上：自台東火車站前搭乘台灣好行東部海岸線或鼎東客運海線班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。綠島：島上設有環島公車，搭乘公車至朝日溫泉下車，往前步行約5分鐘(查詢電話：089-672510)。。",
    "OpenTime": "全天候開放",
    "Picture": {
      "PictureUrl1": "https://www.eastcoast-nsa.gov.tw/image/419/640x480",
      "PictureDescription1": "從步道上遙望綠島露營區海邊"
    },"Position": {
        "PositionLon": 121.49990844726562,
        "PositionLat": 22.633939743041992,
        "GeoHash": "wsn2ub3s3"
      },
      "ParkingPosition": {},
      "TicketInfo": "免費，露營活動另計。",
      "Remarks": "1、紫坪上方的綠島露營區為生態保護區，禁止採集花木生物，並請維護環境整潔，讓這片美景能留與後代子孫。2、露營區目前已於2009年委由「東方之泉有限股份公司」經營，      聯絡電...",
      "SrcUpdateTime": "2021-11-13T01:11:41+08:00",
      "UpdateTime": "2021-11-13T01:40:14+08:00"
    
};

const ScenicSpotPage = (props) => {
    const classes = useStyles();
    const { scenicSpotId } = props;
    const [scenicSpot, setScenicSpot] = useState(undefined);

    useEffect(() => {
        setScenicSpot(mockdata)
    }, [scenicSpotId]);

    const getScenicSpotData = (scenicSpot) => {
        const { ID, Name, Address, OpenTime, TravelInfo, TicketInfo, DescriptionDetail} = scenicSpot;
        const imgUrl = scenicSpot['Picture']['PictureUrl1'];
        //const imgUrl = {(scenicSpot['Picture']['PictureUrl1'])? (scenicSpot['Picture']['PictureUrl1']):(Logo)}
        return (

            <Grid container direction={{xs: 'column-reverse', sm:'row'}}>
                <Grid item container xs={5}>
                    <Grid item container xs={5} sx={{ pd: '10px' }}>
                        <img alt='spotLabel' src={spotLabel} width='70px' height='20px'/>
                        <Typography fontSize={20} fontWeight='Bold' sx={{ pl: '10px'}}> {Name} </Typography>
                    </Grid>
                    <Grid item container xs={12} >
                        <img alt='locationIcon' src={locationIcon} width='20px' />
                        <Typography fontSize={17} sx={{ pl: '10px'}}> 地址 </Typography>
                    </Grid>
                    <Grid item container xs={12} >
                        <Typography fontSize={17} sx={{ margin: '5px', pl: '25px' }}>  {Address} </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <img alt='timeIcon' src={timeIcon} width='20px' />
                        <Typography fontSize={17} sx={{ pl: '10px'}}> 開放時間 </Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{ pd: '5px', pl: '5px' }}>
                        <Typography fontSize={17} sx={{ margin: '5px', pl: '25px' }}> {OpenTime} </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <img alt='busIcon' src={busIcon} width='20px' />
                        <Typography fontSize={17} sx={{ pl: '10px'}}> 交通資訊 </Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{ pd: '5px', pl: '5px' }}>
                        <Typography fontSize={17} sx={{ margin: '5px', pl: '25px' }}> {TravelInfo} </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <img alt='feeIcon' src={feeIcon} width='20px' />
                        <Typography fontSize={17} sx={{ pl: '10px'}}> 參觀費用 </Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{ pd: '5px', pl: '5px' }}>
                        <Typography fontSize={17} sx={{ margin: '5px', pl: '25px' }}> {TicketInfo} </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: '25px', pd: '30px' }} >
                        <Divider color='red' />
                    </Grid>
                    <Grid item container xs={12}>
                        <Box sx={{ overflow: 'visible', margin: '5px', pl: '25px', pt: '20px'}} >
                            <Typography paragraph >
                                {DescriptionDetail}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{
                        height: '160px',
                        display: 'flex'
                    }}>
                <Grid item container xs={5} padding={'30px'}>
                    <img alt='scenicSpotImg' src={imgUrl} sx={{ width: 160, display: { sm: 'block' } }}/>
                </Grid>
                </Box>

            </Grid>

        )
    }

    return (
        <div className={classes.root}>
            <Grid container >
                <Toolbar id="back-to-top-anchor" />
                <Grid item xs={12} padding={{xs: '10px', sm: '50px'}}>
                    {scenicSpot === undefined && <CircularProgress />}
                    {scenicSpot !== undefined && getScenicSpotData(scenicSpot)}
                </Grid>

                <Grid item xs={12} sx={{ justifyContent: 'space-around' }}>
                    <Map />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
                <ScrollTop {...props}>
                    <Button sx={{ width: '10px', height: '10px' }} >
                        <img alt='toTopIcon' src={ToTop} width='100%' />
                    </Button>
                </ScrollTop>
            </Grid>
        </div>
    )
};

export default ScenicSpotPage;