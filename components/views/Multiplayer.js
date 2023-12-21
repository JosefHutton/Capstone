import html from "html-literal";

export default (state) => html`
<section id="multiplayer">
<h1>Multiplayer</h1>
<h1>
If you are looking for some of the most popular games that Steam has, take a look at our list of the Top 5 most popular games on Steam to date.
</h1>
<h2>
${state.topmultiplayer[0].name}
Developer: ${state.topmultiplayer[0].developer}
Average Player Count: ${state.topmultiplayer[0].ccu}
</h2>
<h2>
${state.topmultiplayer[1].name}
Developer: ${state.topmultiplayer[1].developer}
Average Player Count: ${state.topmultiplayer[1].ccu}
</h2>
<h2>
${state.topmultiplayer[2].name}
Developer: ${state.topmultiplayer[2].developer}
Average Player Count: ${state.topmultiplayer[2].ccu}
</h2>
<h2>
${state.topmultiplayer[3].name}
Developer: ${state.topmultiplayer[3].developer}
Average Player Count: ${state.topmultiplayer[3].ccu}
</h2>
<h2>
${state.topmultiplayer[4].name}
Developer: ${state.topmultiplayer[4].developer}
Average Player Count: ${state.topmultiplayer[4].ccu}
</h2>
</section>
`;
