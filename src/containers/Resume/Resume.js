import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { injectIntl } from 'react-intl';
import { withTheme } from '@material-ui/core/styles';

import ResumeAppBar from '../../components/ResumeAppBar/ResumeAppBar';
import ResumeHomeBlock from '../../components/ResumeHomeBlock/ResumeHomeBlock';
import ResumeAboutMeBlock from '../../components/ResumeAboutMeBlock/ResumeAboutMeBlock';
import ResumeWorkAndEducationBlock from '../../components/ResumeWorkAndEducationBlock/ResumeWorkAndEducationBlock';
import ResumeSkillsBlock from '../../components/ResumeSkillsBlock/ResumeSkillsBlock';
import ResumeProjectsBlock from '../../components/ResumeProjectsBlock/ResumeProjectsBlock';
import ResumeLanguagesAndHobbiesBlock from '../../components/ResumeLanguagesAndHobbiesBlock/ResumeLanguagesAndHobbiesBlock';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';

import appTheme from '../../theme';
import './Resume.css';

class Resume extends Component {
  getSkillsByLanguages() {
    const { skills } = this.props;

    const skillsByLanguages = skills.reduce((obj, item) => {
      const newObj = obj;
      if (item.language) {
        newObj[item.language.name] = newObj[item.language.name] || [];
        newObj[item.language.name].push(item);
      }
      return newObj;
    }, {});

    return Object.keys(skillsByLanguages).map(key => skillsByLanguages[key]);
  }

  render() {
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    let shortFullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.firstNameKana) {
      shortFullName = this.props.firstNameKana + this.props.lastNameKana;
      fullName += ` (${this.props.firstNameKana}${this.props.lastNameKana})`;
    }

    const cv = this.props.cvPDF;

    const { theme } = this.props;
    const { formatMessage, formatDate } = this.props.intl;

    const primaryColor = theme.palette.primary.main;
    const secondaryColor = theme.palette.secondary.main;

    const skills = this.getSkillsByLanguages();

    const styles = {
      primaryColor: {
        background: primaryColor,
        color: '#fff',
      },
      secondaryColor: {
        background: secondaryColor,
        color: '#fff',
      },
    };

    return (
      <div className="Resume">

        <ResumeAppBar
          emailAddress={this.props.emailAddress}
          snsAccounts={this.props.snsAccounts}
        />

        <ResumeHomeBlock
          shortFullName={shortFullName}
          headline={this.props.headline}
          style={appTheme.phpColor.style}
        />

        <ResumeAboutMeBlock
          fullName={fullName}
          headline={this.props.headline}
          summary={this.props.summary}
          pictureUrl={this.props.pictureUrl}
          resumeUrl={cv}
          style={appTheme.phpColor.style}
        />

        <ResumeWorkAndEducationBlock
          workIconStyle={styles.primaryColor}
          educationIconStyle={styles.secondaryColor}
          positions={this.props.positions}
          educations={this.props.educations}
          formatMessage={formatMessage}
        />

        <ResumeSkillsBlock skills={skills} tools={this.props.tools} />

        <ResumeProjectsBlock
          projects={this.props.projects}
          formatDate={formatDate}
        />

        <ResumeLanguagesAndHobbiesBlock
          languages={this.props.languages}
          hobbies={this.props.hobbies}
          hobbyCardStyle={styles.primaryColor}
        />


        <BottomNavigation />
      </div>
    );
  }
}

Resume.propTypes = {
  theme: PropTypes.object.isRequired,
  // intl: IntlShape.isRequired,
  firstName: PropTypes.string,
  firstNameKana: PropTypes.string,
  lastName: PropTypes.string,
  lastNameKana: PropTypes.string,
  emailAddress: PropTypes.string,
  headline: PropTypes.string,
  summary: PropTypes.string,
  pictureUrl: PropTypes.string,
  snsAccounts: PropTypes.arrayOf(PropTypes.object),
  positions: PropTypes.arrayOf(PropTypes.object),
  languages: PropTypes.arrayOf(PropTypes.object),
  skills: PropTypes.arrayOf(PropTypes.object),
  educations: PropTypes.arrayOf(PropTypes.object),
  hobbies: PropTypes.arrayOf(PropTypes.object),
  customers: PropTypes.arrayOf(PropTypes.object),
  projects: PropTypes.arrayOf(PropTypes.object),
  cvPDF: PropTypes.string,
  tools: PropTypes.string,
};

Resume.defaultProps = {
  firstName: 'Yash',
  lastName: 'Kharel',
  emailAddress: 'yash048339@gmail.com',
  headline: 'Software engineer',
  summary:
    '♥ Microservice architecture lover ♥<br>Experienced Chief Technology Officer, Developer & Teacher with a demonstrated history of working in the internet industry. Skilled in PHP (Symfony & Laravel frameworks), TDD, continuous integration, WordPress, Linux System Administration, and Application Programming Interfaces. Strong engineering professional with a Licence focused in Web Development from Université Claude Bernard Lyon 1. My favourite stack : Laravel 5, Symfony 3, PHPUnit, PHPQA, Micro-services, Docker, ReactJS, ReactNative with continuous integration on Gitlab.',
  pictureUrl:'../../data/img/me.jpg',
  positions: [],
  languages: [],
  skills: [],
  educations: [],
  hobbies: [],
  customers: [],
  projects: [],
};

const decorators = flow([withTheme(), injectIntl]);

export default decorators(Resume);
