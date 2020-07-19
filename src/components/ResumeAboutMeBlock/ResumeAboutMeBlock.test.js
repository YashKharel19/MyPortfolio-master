import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ResumeAboutMeBlock from './ResumeAboutMeBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <MemoryRouter location="someLocation" context={{}}>
        <ResumeAboutMeBlock
          fullName="Yash Kharel"
          headline="FrontEnd Developer"
          summary="Software Engineer"
          pictureUrl="https://kharelyash.com.np/share.png"
          resumeUrl="https://kharelyash.com.np/static/media/Resume_Yash.pdf"
        />
      </MemoryRouter>
    </IntlProvider>,
    div,
  );
});
