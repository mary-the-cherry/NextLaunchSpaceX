import React, { useEffect } from 'react';
import Launch from './Launch';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function LaunchOverview(props) {
  if (!props.filterUpcoming) {
    const launchList = [...props.launches].reverse().map((launch) => (
      <div className="launch-card d-flex">
        <Launch
          mission_name={launch.mission_name}
          date_utc={launch.launch_date_utc}
          site_name={launch.launch_site.site_name}
          key={launch.mission_name}
        />
      </div>
    ));

    return (
      <Slider {...settings} key="cmcbn">
        {launchList}
      </Slider>
    );
  }

  const launchList = props.launches.map((launch) => (
    <div className="launch-card d-flex">
      <Launch
        mission_name={launch.mission_name}
        date_utc={launch.launch_date_utc}
        site_name={launch.launch_site.site_name}
        key={launch.mission_name}
      />
    </div>
  ));

  return (
    <Slider {...settings} key="cmcbn">
      {launchList}
    </Slider>
  );
}
