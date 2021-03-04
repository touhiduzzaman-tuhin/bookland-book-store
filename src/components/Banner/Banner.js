import React from 'react';
import BannerDetails from '../BannerDetails/BannerDetails';
import BannerData from '../../fakeData/BannerData';

const Banner = () => {
    // console.log(BannerData);
    return (
        <div className='container'>
            <div className="row">
                {
                    BannerData.map(data => <BannerDetails key={data.bannerId} data={data}></BannerDetails>)
                }
            </div>
        </div>
    );
};

export default Banner;