import html from "html-literal";

export default (state) => html`
<section id="Alltime">
<h1>
  If you are looking for some of the most popular games that Steam has, take a look at our list of the Top 10 most popular games Steam has to offer.
</h1>
<h2>
${state.topalltime[0].name} ${state.topalltime[0].developer} ${state.topalltime[0].ccu}
</h2>
<h2>
${state.topalltime[1].name} ${state.topalltime[1].developer} ${state.topalltime[1].ccu}
</h2>
<h2>
${state.topalltime[2].name} ${state.topalltime[2].developer} ${state.topalltime[2].ccu}
</h2>
<h2>
${state.topalltime[3].name} ${state.topalltime[3].developer} ${state.topalltime[3].ccu}
</h2>
<h2>
${state.topalltime[4].name} ${state.topalltime[4].developer} ${state.topalltime[4].ccu}
</h2>
</section>
`;
