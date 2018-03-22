import React from 'react'

const CL = {
  T: 'logo-intrinio__t',
  T_UP: 'logo-intrinio__t-up',
  T_DOWN: 'logo-intrinio__t-down'
};

const S = {
  SVG: {
    width: '170px',
    height: '50px'
  }
};

const IconIntrinio = () =>
<a
   className="logo-intrinio"
   title="Intrinio Fintech Marketplace"
   href="https://intrinio.com"
>
   <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1306 376"
        preserveAspectRatio="xMidYMid meet"
        style={S.SVG}
   >
      <title>Logo Intrinio</title>
      <path d="M144 48.9C106.4 61 67.6 115.2 55.4 172.5c-3.2 14.8-4.4 45.1-2.4 59.9 5.6 41.4 26.5 72.8 59.8 89.9 17.3 8.9 34.8 12.6 50.2 10.7 42.4-5.1 77.6-34.2 90.3-74.6 5.1-16 6.2-24.3 6.1-45.9-.1-20-1.9-34.9-5.6-47.3l-1.3-4.2-10.7 7.5c-5.8 4.1-11.5 7.5-12.7 7.5-1.5 0-3.2-2.1-6.6-8.5-2.6-4.7-5-8.5-5.4-8.5-.3 0-4.1 3.5-8.2 7.7-7 7.2-8.1 8.9-13.3 20.9-5.7 13.1-5.7 13.2-4.1 16.4 4.3 8.4-6.3 16.9-13.8 11-5.6-4.4-4.2-12.7 2.6-15.5 2.8-1.1 3.9-2.8 8-12.3 2.6-6.1 4.7-11.3 4.7-11.6 0-.3-5.6-.6-12.4-.6-9.9 0-12.5.3-12.9 1.4-.3.8-2 2.2-3.8 3.1-8.8 4.6-17.1-6.6-10.5-14.2 3.4-3.9 9.8-3.9 13.2 0l2.3 2.7h29.6l7.9-7.9 7.8-7.9-3.2-6.1-3.3-6.1h-16.3c-18.9 0-16.5 1.2-25.9-12.8-5-7.5-6.6-9.2-9.6-10.1-7.1-2.2-9.2-10-4-15.2 2-2 3.9-2.9 6.1-2.9 6.4 0 11.1 8.2 8 13.9-.7 1.5.4 3.7 5.3 10.9l6.2 9.1 17.5.3 17.5.3 9 16.7c4.9 9.3 9.3 16.8 9.7 16.8.4 0 5.1-2.9 10.3-6.5l9.4-6.6-3.5-10.2c-6.5-19-18.9-42.4-30-56.8-23.8-30.9-51.3-45.2-73.4-38z"/>
   </svg>
   <span className={`${CL.T} ${CL.T_UP}`}>
     INTRINIO
   </span>
   <span className={`${CL.T} ${CL.T_DOWN}`}>
     FINTECH MARKETPLACE
   </span>
</a>

export default IconIntrinio