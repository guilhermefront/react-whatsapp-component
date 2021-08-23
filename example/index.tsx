import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WhatsApp } from '../src';

const App = () => {
  return <WhatsApp as="button" phone="11-92-29292-2992" text="Testosterone" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
