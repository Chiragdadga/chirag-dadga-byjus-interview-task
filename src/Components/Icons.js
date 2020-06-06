import React from "react";
import icon from '../assests/icon/icon.svg'
const Icons = props => <svg><use xlinkHref={`${icon}#${props.name}`}></use></svg>
export default Icons;