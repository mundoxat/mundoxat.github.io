document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-card]").forEach((card) => {
    card.addEventListener("click", (event) => {
      const target = card.dataset.card;
      if (target && target !== "") {
        event.preventDefault();
        console.log(`Selected profile section: ${target}`);
      }
    });
  });

  document.addEventListener("contextmenu", (event) => event.preventDefault());
});


// Profile music: autoplay when allowed, otherwise start on the first user interaction.
(() => {
  const music = document.getElementById('profileMusic');
  if (!music) return;

  music.volume = 0.35;
  music.loop = true;
  music.muted = false;

  let started = false;

  const tryStart = () => {
    if (started) return;
    const promise = music.play();
    if (promise && typeof promise.then === 'function') {
      promise.then(() => {
        started = true;
        cleanup();
      }).catch(() => {});
    }
  };

  const cleanup = () => {
    ['pointerdown', 'click', 'touchstart', 'keydown'].forEach(type =>
      document.removeEventListener(type, tryStart, true)
    );
  };

  ['pointerdown', 'click', 'touchstart', 'keydown'].forEach(type =>
    document.addEventListener(type, tryStart, true)
  );

  window.addEventListener('pageshow', tryStart);
  tryStart();
})();
