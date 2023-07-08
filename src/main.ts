import { t, r, w } from '@arrow-js/core';
import githubLogo from './assets/github.svg';
import './main.pcss';

const githubURL = 'https://github.com/eldarlrd';

const template = t`
  <header>
    <h1 class='drop-shadow-xl select-none m-6 text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold'>
      Fifteen Puzzle
    </h1>
  </header>

  <main class='flex flex-col items-center justify-center gap-4'>
    <span class='flex items-center justify-between w-80 sm:w-96 md:w-[32em] text-white'>
      <button class='drop-shadow-md font-bold bg-cyan-600 py-4 px-6 md:text-lg transition-colors rounded hover:bg-cyan-700'>
        Shuffle
      </button>
      <figure class='drop-shadow-md flex gap-6 select-none rounded md:text-lg bg-cyan-600 px-4 py-1'>
        <time class='text-end font-bold'>
          <figcaption>Time</figcaption>
          <p>0s</p>
        </time>
        <time class='text-end font-bold'>
          <figcaption>Moves</figcaption>
          <p>0</p>
        </time>
      </figure>
    </span>

    <section class='bg-cyan-600 grid p-1 gap-1 grid-cols-4 grid-rows-4 drop-shadow-md shadow-inner rounded w-80 h-80 sm:w-96 sm:h-96 md:w-[32em] md:h-[32em]'>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        1
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        2
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        3
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        4
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        5
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-pink-500 font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        6
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        7
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        8
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-pink-500 font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        9
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        10
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        11
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        12
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        13
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        14
      </div>
      <div class='bg-cyan-400 drop-shadow-sm transition-transform rounded cursor-pointer text-white font-bold justify-center items-center flex text-4xl sm:text-5xl md:text-6xl'>
        15
      </div>
    </section>
  </main>

  <div class='fixed hidden z-10 items-center justify-center flex w-full h-full bg-black/75 inset-0'>
    <section class='bg-sky-400 w-80 md:w-96 md:h-80 h-64 flex flex-col items-center gap-6 justify-center drop-shadow-2xl rounded-md'>
      <p class='text-white select-none text-3xl md:text-4xl'>
        Puzzle Solved
      </p>
      <span class='flex flex-col-reverse items-center justify-center gap-6 text-white'>
        <button class='drop-shadow-md font-bold bg-cyan-600 py-4 md:py-5 px-6 text-lg transition-colors md:text-xl rounded hover:bg-cyan-700'>
          Shuffle
        </button>
        <figure class='drop-shadow-md flex md:py-2 gap-6 select-none rounded text-lg md:text-xl bg-cyan-600 px-4 py-1'>
          <time class='text-end font-bold'>
            <figcaption>Time</figcaption>
            <p>0s</p>
          </time>
          <time class='text-end font-bold'>
            <figcaption>Moves</figcaption>
            <p>0</p>
          </time>
        </figure>
      </span>
    </section>
  </div>

  <footer>
    <p class='flex items-center justify-center flex-col text-center drop-shadow-xl select-none m-6 text-white font-bold sm:text-xl md:text-2xl text-lg'>
      by <a
           class='flex gap-1 items-center justify-center transition-transform text-center hover:scale-110'
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
