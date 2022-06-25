import { Module } from '../core/module';

export class AnimatedBackground extends Module {
  constructor() {
    super('animated', 'Покажи красивую заставку (5 сек)');
  }

  trigger() {
    const animatedBackgroundContainer = document.createElement('div');
    const body = document.body;
    animatedBackgroundContainer.className = 'animated-background';
    body.style.backgroundColor = 'white';
    body.querySelector('canvas')?.remove();
    body.prepend(animatedBackgroundContainer);
    animatedBackgroundContainer.insertAdjacentHTML(
      'afterbegin',
      `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stop-color="#ff0" />
            <stop offset="100%" stop-color="#ff00" />
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
            <animate
              attributeName="fx"
              dur="23.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stop-color="#0ff" />
            <stop offset="100%" stop-color="#0ff0" />
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
            <animate
              attributeName="fx"
              dur="21.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stop-color="#f0f" />
            <stop offset="100%" stop-color="#f0f0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="17s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="26s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="19s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
      <div class="child">
          Junior
        <br />
        Frontend Developer
        <br />
        Hackathon #1
      </div>
      `
    );
    let seconds = 5;
    const timer = document.createElement('div');
    timer.className = 'animated-background__timer';
    animatedBackgroundContainer.prepend(timer);
    timer.innerText = 5;
        
    const timerId = setInterval(() => {
        seconds -= 1;
        timer.innerText = seconds;
    }, 1000);
    setTimeout(() => { clearInterval(timerId) }, 5000);
    

    setTimeout(() => {
      animatedBackgroundContainer.remove();
    }, 5000);
  }
}
