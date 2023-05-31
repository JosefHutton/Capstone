import html from "html-literal";

export default (state) => html`
<section id="Alltime">
  <h1>All Time Most Played</h1>
<h1>
If you are looking for some of the most popular games that Steam has, take a look at our list of the Top 5 most popular games on Steam to date.
</h1>
<h2>
${state.topalltime[0].name}
Developer: ${state.topalltime[0].developer}
Average Player Count: ${state.topalltime[0].ccu}
</h2>
<h2>
${state.topalltime[1].name}
Developer: ${state.topalltime[1].developer}
Average Player Count: ${state.topalltime[1].ccu}
</h2>
<h2>
${state.topalltime[2].name}
Developer: ${state.topalltime[2].developer}
Average Player Count: ${state.topalltime[2].ccu}
</h2>
<h2>
${state.topalltime[3].name}
Developer: ${state.topalltime[3].developer}
Average Player Count: ${state.topalltime[3].ccu}
</h2>
<h2>
${state.topalltime[4].name}
Developer: ${state.topalltime[4].developer}
Average Player Count: ${state.topalltime[4].ccu}
</h2>
</section>
`;
