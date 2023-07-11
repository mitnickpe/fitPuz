import { t, r, w, ArrowTemplate } from '@arrow-js/core';
import githubLogo from './assets/github.svg';
import './main.pcss';

const githubURL = 'https://github.com/eldarlrd';

const grid = r({
  orderedIndex: <number[]>(<unknown>[]),
  elementValue: <number[]>(<unknown>[]),
  matchingValue: <number[]>(<unknown>[]),
  elementTiles: <ArrowTemplate>(<unknown>[]),
  hide: <boolean>true,
  moves: <number>0
});

const gridLoop = () => {
  for (let i = 1; i <= 16; i++) {
    grid.orderedIndex.push(i);
    grid.elementValue.push(i);
  }
  shuffle();
};

const shuffle = () => {
  grid.elementValue.sort(() => Math.random() - 0.5);
  grid.moves = 0;
  assign();
};

const assign = () => {
  grid.elementTiles.length = 0;
  grid.elementValue.forEach(e => {
    grid.elementTiles.push(t`
      <div
        id=${e}
        class='${
          e === 16 ? 'invisible' : ''
        } flex cursor-pointer transition-transform hover:scale-95 select-none items-center bg-cyan-400 justify-center rounded text-4xl font-bold text-white drop-shadow-sm sm:text-5xl md:text-6xl'
        @click='${() => move(e)}'>
        ${e}
      </div>
    `.key(e)
    );
  });
  match();
  check();
};

const move = (tileValue: number) => {
  const tileIndex = grid.elementValue.indexOf(tileValue);
  const emptyTile = grid.elementValue.indexOf(16);

  if (
    ![emptyTile - 4, emptyTile - 1,
      emptyTile + 1, emptyTile + 4]
      .includes(tileIndex)
  ) return;

  const newElements = r(
    [...grid.elementValue].map(e => {
      if (
        grid.elementValue.indexOf(e) !== emptyTile &&
        grid.elementValue.indexOf(e) !== tileIndex
      ) return e;
      else if (e === 16) return tileValue;
      return 16;
    })
  );

  grid.elementValue = newElements;
  grid.moves++;
  assign();
};

const match = () => {
  grid.matchingValue.length = 0;
  grid.elementValue.forEach((v, i) => {
    if (v === grid.orderedIndex[i])
      grid.matchingValue.push(v);
    grid.matchingValue.splice(grid.matchingValue.indexOf(v))
  });
  colorSet();
};

const colorSet = () => {
  grid.elementValue.forEach((v) => {
    if (grid.matchingValue.includes(v))
      document.getElementById(v.toString())
      ?.classList.add('bg-emerald-400');
    else
      document.getElementById(v.toString())
      ?.classList.remove('bg-emerald-400');
  });
}

const check = () => {
  const modal = document.getElementById('modal');
  grid.hide = grid.elementValue.every((e, i) => {
    if (e === grid.orderedIndex[i])
      return true;
    return false;
  });

  grid.hide
    ? modal?.classList.remove('hidden')
    : modal?.classList.add('hidden')
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
          <p>${() => grid.moves}</p>
        </time>
      </figure>
    </span>

    <section class='grid h-80 w-80 grid-cols-4 grid-rows-4 gap-1 rounded bg-cyan-600 p-1 shadow-inner drop-shadow-md sm:h-96 sm:w-96 md:h-[32em] md:w-[32em]'>
      ${() => grid.elementTiles}
    </section>
  </main>

  <div id='modal' class='fixed hidden inset-0 z-10 flex h-full w-full items-center justify-center bg-black/75'>
    <section class='flex h-64 w-80 flex-col items-center justify-center gap-6 rounded-md bg-sky-400 drop-shadow-2xl md:h-80 md:w-96'>
      <p class='select-none text-3xl text-white md:text-4xl'>
        Puzzle Solved
      </p>
      <span class='flex flex-col-reverse items-center justify-center gap-6 text-white'>
        <button
          class='rounded bg-cyan-600 px-6 py-4 text-lg font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:py-5 md:text-xl'
          @click='${() => shuffle()}'>
          Shuffle
        </button>
        <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 text-lg drop-shadow-md md:py-2 md:text-xl'>
          <time class='text-end font-bold'>
            <figcaption>Time</figcaption>
            <p>0s</p>
          </time>
          <time class='text-end font-bold'>
            <figcaption>Moves</figcaption>
            <p>${() => grid.moves}</p>
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

w(match);
w(check);
gridLoop();

const appElement = document.getElementById('app');
if (appElement !== null) template(appElement);
