import React from 'react'

const COLOR = '#faebd7';
const TWITTER_URL = 'https://twitter.com';
const S = {
  LINK: {
    display: 'inline-block',
    position: 'relative',
    top: -2,
    height: 28,
    borderRadius: 4,
    padding: '1px 10px 1px 9px',
    color: COLOR,
    outline: 0,
    textDecoration : 'none',
    userSelect: 'none',
    cursor: 'pointer'
  },
  ICON: {
    display: 'inline-block',
    position: 'relative',
    top: 4,
    width: 18,
    height: 18,
    fill: COLOR,
    stroke: COLOR,
    marginRight: 8
  }
};

const TwitterLink = ({ rootStyle, iconStyle, account='', title }) => {
  if (!account){
    return null;
  }
  return (
    <a
       className="bt-twitter"
       style={{ ...S.LINK, ...rootStyle }}
       target="_blank"
       href={`${TWITTER_URL}/${account}`}
       title={title}
    >
      <svg
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...S.ICON, ...iconStyle}}
      >
        <title>Twitter Logo</title>
        <path d="M68.812 15.14c-2.348 1.04-4.87 1.744-7.52 2.06 2.704-1.62 4.78-4.186 5.757-7.243-2.53 1.5-5.33 2.592-8.314 3.176C56.35 10.59 52.948 9 49.182 9c-7.23 0-13.092 5.86-13.092 13.093 0 1.026.118 2.02.338 2.98C25.543 24.527 15.9 19.318 9.44 11.396c-1.125 1.936-1.77 4.184-1.77 6.58 0 4.543 2.312 8.552 5.824 10.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163 0 6.345 4.513 11.638 10.504 12.84-1.1.298-2.256.457-3.45.457-.845 0-1.666-.078-2.464-.23 1.667 5.2 6.5 8.985 12.23 9.09-4.482 3.51-10.13 5.605-16.26 5.605-1.055 0-2.096-.06-3.122-.184 5.794 3.717 12.676 5.882 20.067 5.882 24.083 0 37.25-19.95 37.25-37.25 0-.565-.013-1.133-.038-1.693 2.558-1.847 4.778-4.15 6.532-6.774z"/>
      </svg>
      <span>@{account}</span>
    </a>
  );
};

export default TwitterLink
