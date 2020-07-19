import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


import './ResumeAppBar.css';

const ResumeAppBar = ({ emailAddress, snsAccounts }) => (
  <AppBar className="ResumeAppBar" position="absolute">
    <Toolbar className="ResumeAppBar-header">
      <Button href={`mailto:${emailAddress}`}>{emailAddress}</Button>
      <span className='social-icon'><a href='https://github.com/YashKharel19'><FaGithub /></a></span>
      <span className='social-icon'><a href='https://www.linkedin.com/in/yash-kharel-2b338698/'><FaLinkedin /></a></span>
      <span className='social-icon'><a href='https://www.instagram.com/yashkharel/'><FaInstagram /></a></span>
    </Toolbar>
  </AppBar>
);

ResumeAppBar.propTypes = {
  emailAddress: PropTypes.string.isRequired,
};

export default ResumeAppBar;
