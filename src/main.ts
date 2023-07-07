import { t, r, w } from '@arrow-js/core';
import githubLogo from './assets/github.svg';
import './main.pcss';

const githubURL = 'https://github.com/eldarlrd';

const template = t`
  <header>
    <h1 class='font-main drop-shadow-xl select-none m-4 text-white text-center text-3xl font-bold'>
      Fifteen Puzzle
    </h1>
  </header>

  <main>

  </main>

  <footer>
    <p class='flex items-center justify-center flex-col font-main text-center drop-shadow-xl select-none m-4 text-white font-bold text-lg'>
      by <a
           class='flex gap-1 items-center justify-center text-center hover:scale-110'
           title='Go to GitHub'
           target='_blank'
           rel='noreferrer'
           href=${githubURL}>
           <img
             class='w-6 h-6'
             alt='GitHub Logo'
             src=${githubLogo}
           > eldarlrd
         </a>
    </p>
  </footer>
`;

const appElement = document.getElementById('app');
if (appElement !== null) template(appElement);
