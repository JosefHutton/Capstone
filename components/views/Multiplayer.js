import html from "html-literal";

export default (state) => html`
  <section id="multiplayer">
    <h1>Multiplayer</h1>
    <h3>
      If you are looking for some multiplayer games to play with friends, take a
      look at our list of the Top 5 most popular multiplayer games in the last
      24 hours
    </h3>
    <hr />
    <h2>
      <span class="name">${state.topmultiplayer[0].name}</span>
      <span class="developer"
        >Developer: ${state.topmultiplayer[0].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topmultiplayer[0].ccu}</span
      >
    </h2>

    <h2>
      <span class="name">${state.topmultiplayer[1].name}</span>
      <span class="developer"
        >Developer: ${state.topmultiplayer[1].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topmultiplayer[1].ccu}</span
      >
    </h2>
    <h2>
      <span class="name">${state.topmultiplayer[2].name}</span>
      <span class="developer"
        >Developer: ${state.topmultiplayer[2].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topmultiplayer[2].ccu}</span
      >
    </h2>
    <h2>
      <span class="name">${state.topmultiplayer[3].name}</span>
      <span class="developer"
        >Developer: ${state.topmultiplayer[3].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topmultiplayer[3].ccu}</span
      >
    </h2>
    <h2>
      <span class="name">${state.topmultiplayer[4].name}</span>
      <span class="developer"
        >Developer: ${state.topmultiplayer[4].developer}</span
      >
      <span class="ccu"
        >Average Player Count: ${state.topmultiplayer[4].ccu}</span
      >
    </h2>
    <h6>*This list is updated once every 24 hours.</h6>
  </section>
`;
