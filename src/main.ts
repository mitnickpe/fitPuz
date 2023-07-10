import { t, r, ArrowTemplate } from '@arrow-js/core';
import githubLogo from './assets/github.svg';
import './main.pcss';

const githubURL = 'https://github.com/eldarlrd';

const grid = r({
  orderedIndex: <number[]>(<unknown>[]),
  elementIndex: <number[]>(<unknown>[]),
  elements: <ArrowTemplate>(<unknown>[])
});

const gridLoop = () => {
  for (let i = 1; i <= 16; i++) {
    grid.orderedIndex.push(i);
    grid.elementIndex.push(i);
  }
  shuffle();
};

const shuffle = () => {
  grid.elementIndex.sort(() => Math.random() - 0.5);
  assign();
};

const assign = () => {
  grid.elements.length = 0;
  grid.elementIndex.forEach(e => {
    grid.elements.push(t`
      <div
        class='${
          e === 16 ? 'invisible' : ''
        } flex cursor-pointer select-none items-center justify-center rounded bg-cyan-400 text-4xl font-bold text-white drop-shadow-sm transition-transform sm:text-5xl md:text-6xl'
        @click='${() => move(e)}'>
        ${e}
      </div>
    `.key(e));
  });
};

const move = (gridElementValue: number) => {
  const gridIndex = grid.elementIndex.indexOf(gridElementValue);
  const empty = grid.elementIndex.indexOf(16);
  if (![empty - 4, empty - 1, empty + 1, empty + 4].includes(gridIndex)) return;
  console.log('empty: ' + empty);
  console.log('elindex: ' + gridIndex);
  console.log('elval: ' + gridElementValue);
  grid.elementIndex.splice(gridIndex, 1);
  grid.elementIndex.splice(empty, 0, grid.elementIndex[gridIndex]);
  assign();
};

const template = t`
  <header>
    <h1 class='m-6 select-none text-center text-4xl font-bold text-white drop-shadow-xl sm:text-5xl md:text-6xl'>
      Fifteen Puzzle
    </h1>
  </header>

  <main class='flex flex-col items-center justify-center gap-4'>
    <span class='flex w-80 items-center justify-between text-white sm:w-96 md:w-[32em]'>
      <button
        class='rounded bg-cyan-600 px-6 py-4 font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:text-lg'
        @click='${() => shuffle()}'>
        Shuffle
      </button>
      <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 drop-shadow-md md:text-lg'>
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

    <section class='grid h-80 w-80 grid-cols-4 grid-rows-4 gap-1 rounded bg-cyan-600 p-1 shadow-inner drop-shadow-md sm:h-96 sm:w-96 md:h-[32em] md:w-[32em]'>
      ${() => grid.elements}
    </section>
  </main>

  <div class='fixed inset-0 z-10 flex hidden h-full w-full items-center justify-center bg-black/75'>
    <section class='flex h-64 w-80 flex-col items-center justify-center gap-6 rounded-md bg-sky-400 drop-shadow-2xl md:h-80 md:w-96'>
      <p class='select-none text-3xl text-white md:text-4xl'>
        Puzzle Solved
      </p>
      <span class='flex flex-col-reverse items-center justify-center gap-6 text-white'>
        <button class='rounded bg-cyan-600 px-6 py-4 text-lg font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:py-5 md:text-xl'>
          Shuffle
        </button>
        <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 text-lg drop-shadow-md md:py-2 md:text-xl'>
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
    <p class='m-6 flex select-none flex-col items-center justify-center text-center text-lg font-bold text-white drop-shadow-xl sm:text-xl md:text-2xl'>
      by <a
           class='flex items-center justify-center gap-1 text-center transition-transform hover:scale-110'
           title='Go to GitHub'
           target='_blank'
           rel='noreferrer'
           href=${githubURL}>
           <img
             class='h-6 w-6'
             alt='GitHub Logo'
             src=${githubLogo}
           > eldarlrd
         </a>
    </p>
  </footer>
`;

gridLoop();

const appElement = document.getElementById('app');
if (appElement !== null) template(appElement);
