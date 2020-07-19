import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { FormattedMessage } from 'react-intl';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import LanguageIcon from '@material-ui/icons/Language';
import ToysIcon from '@material-ui/icons/Toys';
import CodeIcon from '@material-ui/icons/Code';

import './BottomNavigation.css';

const Link = props => {
  const { showLabel, ...rest } = props;
  return <Scroll.Link {...rest} />;
};

Link.propTypes = {
  showLabel: PropTypes.bool,
};

const buttons = [
  {
    label: 'Home',
    name: 'Resume-home',
    icon: <HomeIcon />,
  },
  {
    label: 'About me',
    name: 'Resume-aboutMe',
    icon: <FaceIcon />,
  },
  {
    label: 'Experience',
    name: 'Resume-work',
    icon: <WorkIcon />,
  },
  {
    label: 'Education',
    name: 'Resume-education',
    icon: <SchoolIcon />,
    offset: -16,
  },
  {
    label: 'Skills',
    name: 'Resume-skills',
    icon: <SettingsIcon />,
  },
  {
    label: 'Projects',
    name: 'Resume-projects',
    icon: <CodeIcon />,
  },
  {
    label: 'Languages',
    name: 'Resume-languages',
    icon: <LanguageIcon />,
  },
  {
    label: 'Hobbies',
    name: 'Resume-hobbies',
    icon: <ToysIcon />,
  },
];

const SimpleBottomNavigation = () => (
  <BottomNavigation value="0" className="BottomNavigation">
    {buttons.map((button, j) => (
      <Link
        key={j} // eslint-disable-line react/no-array-index-key
        className="BottomNavigation-link"
        to={button.name}
        activeClass="active"
        spy
        smooth
        offset={button.offset}
        duration={500}
      >
        {button.icon}
        <FormattedMessage id={button.label} />
      </Link>
    ))}
  </BottomNavigation>
);

export default SimpleBottomNavigation;
