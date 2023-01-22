import React from 'react';
import Sprite from '../assets/img/svg/sprite.svg';
// import './LetterSvg.scss';

const LetterSvg = ({letter,name, color, size}) => (
   <svg className="icon" fill={color} width={size} height={size}>
       <use href={`${Sprite}#${letter}-svg`} />
   </svg>
);

LetterSvg.defaultProps = {
   size: 30,
   color: 'black',
};

export default LetterSvg;