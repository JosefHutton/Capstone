import html from "html-literal";

export default (state) => html`
  <section id="singleplayer">
    <h1>Singleplayer</h1>
    <h3>
      If you are looking for some of the most popular singleplayer games that
      Steam has, take a look at our list of the Top 5 most popular singleplayer
      games in the last 24 hours.
    </h3>
    <hr />
    <h2>
      <span class="name">${state.topsingleplayer[0].name}</span>
      <span class="developer"
        >Developer: ${state.topsingleplayer[0].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topsingleplayer[0].ccu}</span
      >
    </h2>

    <h2>
      <span class="name">${state.topsingleplayer[1].name}</span>
      <span class="developer"
        >Developer: ${state.topsingleplayer[1].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topsingleplayer[1].ccu}</span
      >
    </h2>
    <h2>
      <span class="name">${state.topsingleplayer[2].name}</span>
      <span class="developer"
        >Developer: ${state.topsingleplayer[2].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topsingleplayer[2].ccu}</span
      >
    </h2>
    <h2>
      <span class="name">${state.topsingleplayer[3].name}</span>
      <span class="developer"
        >Developer: ${state.topsingleplayer[3].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topsingleplayer[3].ccu}</span
      >
    </h2>
    <h2>
      <span class="name">${state.topsingleplayer[4].name}</span>
      <span class="developer"
        >Developer: ${state.topsingleplayer[4].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topsingleplayer[4].ccu}</span
      >
    </h2>
    <h6>*This list is updated once every 24 hours.</h6>
  </section>
`;
