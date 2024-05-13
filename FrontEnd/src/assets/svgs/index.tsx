import React from 'react';

const MarkerAnottationIcon = ({}: React.SVGProps<SVGSVGElement>) => (
  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.64502 14.5878L1.69691 13.5627L2.99729 14.2633L3.25917 15.1649L2.99729 15.9523L2.18575 16.4884L0.912236 15.9523L0.64502 14.5878Z"
      fill="#59AC64"
      fillOpacity="0.25"
    />
    <path
      d="M2.60631 0.919983L2.60657 13.2021L2.64452 13.2157C3.35217 13.4822 3.84907 14.1394 3.90434 14.903L3.90822 14.9749L3.90947 15.0453C3.90947 16.1248 3.03431 17 1.95474 17C0.875165 17 0 16.1248 0 15.0453C0 14.2397 0.491527 13.5306 1.21527 13.2352L1.2817 13.2095L1.31619 13.1974L1.31653 0.919983H2.60631ZM1.95474 14.3937C1.59488 14.3937 1.30316 14.6854 1.30316 15.0453C1.30316 15.4051 1.59488 15.6969 1.95474 15.6969C2.31459 15.6969 2.60631 15.4051 2.60631 15.0453C2.60631 14.6854 2.31459 14.3937 1.95474 14.3937Z"
      fill="#59AC64"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6997 5.0199L1.55008 9.18127L1.55008 0.858521L10.6997 5.0199Z"
      fill="#59AC64"
      fillOpacity="0.25"
    />
    <path
      d="M1.30225 0L12.9877 5.01987L1.31057 10.0397L1.30225 0ZM2.60675 1.97852L2.61144 8.06165L9.6868 5.02008L2.60675 1.97852Z"
      fill="#59AC64"
    />
  </svg>
);

const LayerIcon = ({}: React.SVGProps<SVGSVGElement>) => (
  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 4.16L9.5 0L19 4.16L9.5 8.31L0 4.16Z" fill="#C7C7C7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.97 6.83002L19 7.72002L9.5 11.88L0 7.72002L2.04 6.83002L9.5 10.09L16.97 6.83002Z"
      fill="#C7C7C7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.97 10.39L19 11.28L9.5 15.44L0 11.28L2.04 10.39L9.51 13.66L16.97 10.39Z"
      fill="#C7C7C7"
    />
  </svg>
);

const ScaleIcon = ({}: React.SVGProps<SVGSVGElement>) => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.34 0L7.12 1.78L5.34 3.56L6.53 4.75L8.31 2.97L13.06 7.72L11.28 9.5L12.47 10.69L14.25 8.91L19 13.66L13.66 19L0 5.34L5.34 0ZM16.03 10.69L13.65 13.07L14.84 14.26L17.22 11.88L16.03 10.69ZM10.09 4.75L7.71 7.13L8.9 8.32L11.28 5.94L10.09 4.75Z"
      fill="#C7C7C7"
    />
  </svg>
);

const MapIcon = ({}: React.SVGProps<SVGSVGElement>) => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.12122L4.52 0.0012207V13.8112L0 15.9412V2.12122Z"
      fill="#C7C7C7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.89 2.12122L6.10999 0.0012207V13.8112L10.89 15.9412V2.12122Z"
      fill="#C7C7C7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.48 2.12122L17 0.0012207V13.8112L12.48 15.9412V2.12122Z"
      fill="#C7C7C7"
    />
  </svg>
);

export { MapIcon, LayerIcon, ScaleIcon, MarkerAnottationIcon };
