import { t, r, w } from '@arrow-js/core';
import './main.pcss';

const appElement = document.getElementById('app');
const template = t`
  <h1 class="font-main text-3xl font-bold underline">
    Hello world!
  </h1>
`;

if (appElement !== null) template(appElement);
