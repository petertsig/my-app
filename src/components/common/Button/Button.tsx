import React from 'react';
import {Props} from './Type';


const Button = ({
  onClickHandler,
  className='',
  ...props
}:Props) => 
  ( <button 
    className={`comp-button ${className}`}
    onClick={(
      e:React.MouseEvent<HTMLButtonElement,MouseEvent>
      ):void => {onClickHandler(e)}}
    {...props}
    >
      {props.children}
    </button> )

export default Button