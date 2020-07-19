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
  pythonColor: {
    style: {
      background: '#306998',
      color: '#fff',
    },
    className: 'vertical-timeline-element--python',
    icon: <DevIcon icon="python" fill='#FFD43B' />,
  },
  cssColor: {
    style: {
      background: '#ccc',
      color: '#fff',
    },
    className: 'vertical-timeline-element--css',
    icon: <DevIcon icon="css3" />,
  },
  redhatColor: {
    style: {
      background: 'black',
      color: 'red',
    },
    className: 'vertical-timeline-element--redhat',
    icon: <DevIcon icon="redhat" fill='red' />,
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
