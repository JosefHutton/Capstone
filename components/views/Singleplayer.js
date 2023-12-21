import html from "html-literal";

export default (state) => html`
<section id="singleplayer">
  <h1>Singleplayer</h1>
<h1>
If you are looking for some of the most popular games that Steam has, take a look at our list of the Top 5 most popular games on Steam to date.
</h1>
<h2>
${state.topsingleplayer[0].name}
Developer: ${state.topsingleplayer[0].developer}
Average Player Count: ${state.topsingleplayer[0].ccu}
</h2>
<h2>
${state.topsingleplayer[1].name}
Developer: ${state.topsingleplayer[1].developer}
Average Player Count: ${state.topsingleplayer[1].ccu}
</h2>
<h2>
${state.topsingleplayer[2].name}
Developer: ${state.topsingleplayer[2].developer}
Average Player Count: ${state.topsingleplayer[2].ccu}
</h2>
<h2>
${state.topsingleplayer[3].name}
Developer: ${state.topsingleplayer[3].developer}
Average Player Count: ${state.topsingleplayer[3].ccu}
</h2>
<h2>
${state.topsingleplayer[4].name}
Developer: ${state.topsingleplayer[4].developer}
Average Player Count: ${state.topsingleplayer[4].ccu}
</h2>
</section>
`;
