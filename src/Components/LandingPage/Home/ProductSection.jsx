
import { Box, styled } from '@mui/material';

import Slide from './ProductSlider';
import { dealData } from '../constants/data';
const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 5,
    padding: 0,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const ProductSection = ({title}) => {
    const adURL = 'https://img.freepik.com/free-vector/flat-vertical-sale-poster-template-with-photo_23-2149046968.jpg?w=2000';
console.log(title);
    return (
        <Component>
             <RightComponent>
                <img src={adURL} style={{width: "100%",height:"100%"}}/>
            </RightComponent>
            <LeftComponent>
                <Slide 
                    data={dealData} 
                    title={title}
                    timer={true} 
                    multi={true} 
                />
            </LeftComponent>
           
        </Component>
    )
}

export default ProductSection;