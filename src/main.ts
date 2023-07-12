import { t, r, w, ArrowTemplate } from '@arrow-js/core';
import githubLogo from '@/assets/github.svg';
import solvedAudio from '@/assets/solved.mp3';
import '@/main.pcss';

const githubURL = 'https://github.com/eldarlrd';
// Reactive Variables
const grid = r({
  orderedIndex: <number[]>(<unknown>[]),
  elementValue: <number[]>(<unknown>[]),
  matchingValue: <number[]>(<unknown>[]),
  elementTiles: <ArrowTemplate>(<unknown>[]),
  show: <boolean>false,
  volume: <boolean>false,
  ticking: <boolean>false,
  startTime: <number>0,
  endTime: <number>0,
  timeElapsed: <number>0,
  minutes: <number>0,
  seconds: <number>0,
  moves: <number>0
});
// Set the Grid
const gridLoop = () => {
  for (let i = 1; i <= 16; i++) {
    grid.orderedIndex.push(i);
    grid.elementValue.push(i);
  }
  shuffle();
};
// Randomization
const shuffle = () => {
  grid.elementValue.sort(() => Math.random() - 0.5);
  grid.startTime = 0;
  grid.endTime = 0;
  grid.timeElapsed = 0;
  grid.moves = 0;
  assign();
};
// Population
const assign = () => {
  grid.elementTiles.length = 0;
  grid.elementValue.forEach(e => {
    grid.elementTiles.push(t`
      <div
        id=${e}
        class='${
          e === 16 ? 'invisible' : ''
        } flex cursor-pointer select-none items-center justify-center rounded bg-cyan-400 text-4xl font-bold text-white drop-shadow-sm transition-transform hover:scale-95 sm:text-5xl md:text-6xl'
        @click='${() => move(e)}'>
        ${e}
      </div>
    `.key(e)
    );
  });
  match();
  check();
};
// Tile Movement
const move = (tileValue: number) => {
  const tileIndex = grid.elementValue.indexOf(tileValue);
  const emptyTile = grid.elementValue.indexOf(16);
  let shiftLeft = emptyTile - 1;
  let shiftRight = emptyTile + 1;

  if (tileIndex < 0 || tileIndex > 15) return;

  if ([12, 8, 4].includes(emptyTile))
    shiftLeft = -1;
  if ([11, 7, 3].includes(emptyTile))
    shiftRight = -1;

  if (
    ![emptyTile - 4, emptyTile + 4,
      shiftLeft, shiftRight]
      .includes(tileIndex)
  ) return;

  const newElements = r(
    [...grid.elementValue].map(v => {
      if (
        grid.elementValue.indexOf(v) !== emptyTile &&
        grid.elementValue.indexOf(v) !== tileIndex
      ) return v;
      else if (v === 16) return tileValue;
      return 16;
    })
  );

  grid.elementValue = newElements;
  grid.moves++;
  assign();
};
// Keyboard Controls
const keyControl = (key: KeyboardEvent) => {
  if (
    ['ArrowUp', 'ArrowLeft', 'ArrowRight',
     'ArrowDown', 'KeyR'].includes(key.code)
  ) key.preventDefault();

  switch (key.code) {
    case 'ArrowUp':
      move(grid.elementValue[
        grid.elementValue.indexOf(16) + 4]
      ); break;
    case 'ArrowLeft':
      move(grid.elementValue[
        grid.elementValue.indexOf(16) + 1]
      ); break;
    case 'ArrowRight':
      move(grid.elementValue[
        grid.elementValue.indexOf(16) - 1]
      ); break;
    case 'ArrowDown':
      move(grid.elementValue[
        grid.elementValue.indexOf(16) - 4]
      ); break;
    case 'KeyR':
      shuffle();
  }
};
// Timer Controls
const timeStart = () => {
  if (grid.startTime === 0) {
    grid.ticking = true;
    grid.startTime = performance.now();
  } timeStop();
};

const timeStop = () => {
  if (grid.startTime > 0 && grid.ticking) {
    grid.endTime = performance.now();
    grid.timeElapsed = grid.endTime - grid.startTime;
    grid.timeElapsed /= 1000;
    grid.minutes = ~~(grid.timeElapsed / 60);
    grid.seconds = ~~(grid.timeElapsed - grid.minutes * 60);
  }
};
// Verify if Orders Match
const match = () => {
  grid.matchingValue.length = 0;
  grid.elementValue.forEach((v, i) => {
    if (v === grid.orderedIndex[i])
      grid.matchingValue.push(v);
    grid.matchingValue.splice(grid.matchingValue.indexOf(v));
  });
  colorSet();
};
// Correctly Placed Tiles
const colorSet = () => {
  grid.elementValue.forEach(v => {
    if (grid.matchingValue.includes(v))
      document.getElementById(v.toString())
      ?.classList.add('bg-emerald-400');
    else
      document.getElementById(v.toString())
      ?.classList.remove('bg-emerald-400');
  });
};
// Checking for a Solution
const check = () => {
  const modal = document.getElementById('modal');
  const audio = new Audio(`${solvedAudio}`);
  grid.show = grid.elementValue.every((v, i) => {
    if (v === grid.orderedIndex[i]) return true;
    return false;
  });

  if (grid.show) {
    if (grid.volume)
      audio?.play();
    grid.volume = true;
    grid.ticking = false;
    modal?.classList.remove('hidden');
  } else modal?.classList.add('hidden');
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
        class='rounded select-none bg-cyan-600 px-6 py-4 font-bold drop-shadow-md transition-colors outline-none hover:bg-cyan-700 md:text-lg'
        @click='${() => shuffle()}'>
        Shuffle
      </button>
      <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 drop-shadow-md md:text-lg'>
        <time class='text-end font-bold'>
          <figcaption>Time</figcaption>
          <p class='w-20 min-w-max'>
            ${() => `${grid.minutes === 0 ? '' : grid.minutes + 'm'} ${grid.seconds}s`}
          </p>
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

  <div id='modal' class='fixed inset-0 z-10 flex hidden h-full w-full items-center justify-center bg-black/75'>
    <section class='flex h-64 w-80 flex-col items-center justify-center gap-6 rounded-md bg-sky-400 drop-shadow-2xl md:h-80 md:w-96'>
      <p class='select-none text-3xl text-white md:text-4xl'>
        Puzzle Solved
      </p>
      <span class='flex flex-col-reverse items-center justify-center gap-6 text-white'>
        <button
          class='rounded select-none bg-cyan-600 px-6 py-4 text-lg font-bold drop-shadow-md transition-colors outline-none hover:bg-cyan-700 md:py-5 md:text-xl'
          @click='${() => shuffle()}'>
          Shuffle
        </button>
        <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 text-lg drop-shadow-md md:py-2 md:text-xl'>
          <time class='text-end font-bold'>
            <figcaption>Time</figcaption>
            <p class='w-20 min-w-max'>
              ${() => `${grid.minutes === 0 ? '' : grid.minutes + 'm'} ${grid.seconds}s`}
            </p>
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
// Watchers
w(match);
w(check);
w(timeStart);
gridLoop();
document.addEventListener('keydown', key => keyControl(key));
// Easter Egg
console.log("Hope you don't get the 14-15 one!");
// Render
const appElement = document.getElementById('app');
if (appElement !== null) template(appElement);
