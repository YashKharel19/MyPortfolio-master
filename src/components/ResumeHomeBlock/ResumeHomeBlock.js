import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import appTheme from '../../theme';
import './ResumeHomeBlock.css';

export const ResumeHomeBlock = ({ style, shortFullName, headline }) => (
  <ScreenBlock id="Resume-home" style={style} className="ResumeHomeBlock">
    <div className="ResumeHomeBlock-headline-container">
      <div className="ResumeHomeBlock-headline">
        <h1>
          <FormattedMessage
            id="Resume.im"
            defaultMessage="I'm {fullName}"
            values={{ fullName: shortFullName }}
          />
        </h1>
        <h2>{headline}</h2>
      </div>
    </div>

    <div className="ResumeHomeBlock-squares">
      <GridBackground>
        <div style={{ ...appTheme.reactColor.style }}>
          {appTheme.reactColor.icon}
        </div>
        <div style={{ ...appTheme.vueColor.style }}>
          {appTheme.vueColor.icon}
        </div>
        <div style={{ ...appTheme.javascriptColor.style }}>
          {appTheme.javascriptColor.icon}
        </div>
        <div style={{ ...appTheme.awsColor.style }}>
          {appTheme.awsColor.icon}
        </div>
        <div style={{ ...appTheme.html5Color.style }}>
          {appTheme.html5Color.icon}
        </div>
       <div style={{ ...appTheme.nodeColor.style }}>
          {appTheme.nodeColor.icon}
        </div>
        <div style={{ ...appTheme.cssColor.style }}>
          {appTheme.cssColor.icon}
        </div>
        <div style={{ ...appTheme.angularColor.style }}>
          {appTheme.angularColor.icon}
        </div>
        <div style={{ ...appTheme.javaColor.style }}>
          {appTheme.javaColor.icon}
        </div>
      </GridBackground>
    </div>
  </ScreenBlock>
);

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ResumeHomeBlock.defaultPropTypes = {
  style: {},
};

export default ResumeHomeBlock;
