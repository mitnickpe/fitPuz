import './main.pcss';

const appContent = document.getElementById('app') as HTMLDivElement;
if (appContent !== null)
  appContent.innerHTML = `
    <h1 class='font-main text-3xl font-bold underline'>Hello world!</h1>
  `;
