import React from 'react';

import DevIcon from "devicon-react-svg";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const theme = {
  phpColor: {
    style: {
      background: '#6181b6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--php',
    icon: <DevIcon icon="php" style={{fill:"#fff"}} />,
},
  angularColor:{
    style: {
      background: '#BD002E',
      color: '#fff',
    },
    className: 'vertical-timeline-element--angular',
    icon: <DevIcon icon="angular_simple" style={{fill:"#fff"}} />,
  },
  reactColor: {
    style: {
      background: '#61DAFB',
      color: '#fff',
    },
    className: 'vertical-timeline-element--react',
    icon: <DevIcon icon="react" style={{fill:"#fff"}} />,
  },
  javascriptColor: {
    style: {
      background: '#F0DB4F',
      color: '#fff',
    },
    className: 'vertical-timeline-element--javascript',
    icon: <DevIcon icon="javascript" style={{fill:"#fff"}} />,
  },
    html5Color: {
    style: {
      background: '#dd400f',
      color: '#fff',
    },
    className: 'vertical-timeline-element--html5',
    icon: <DevIcon icon="html5" fill='#FFF' />,
  },
 javaColor: {
    style: {
      background: '#306998',
      color: '#fff',
    },
    className: 'vertical-timeline-element--java',
    icon: <DevIcon icon="java" fill='#FFD43B' />,
  },
  cssColor: {
    style: {
      background: '#146EB0',
      color: '#fff',
    },
    className: 'vertical-timeline-element--css',
    icon: <DevIcon icon="css3" fill='#FFF' />,
  },
  springColor: {
    style: {
      background: 'black',
      color: 'red',
    },
    className: 'vertical-timeline-element--spring',
    icon: <DevIcon icon="spring" fill='green' />,
  },
  othersColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <MoreHorizIcon />,
  },
};

export default theme;
