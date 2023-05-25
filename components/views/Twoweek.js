import html from "html-literal";

export default (state) => html`
<section id="Twoweek">
<h1>
  If you are looking for some of the most popular games that Steam has, take a look at our list of the Top 10 most popular games Steam has to offer.
</h1>
<h2>
${state.toptwoweek[0].name} ${state.toptwoweek[0].developer} ${state.toptwoweek[0].ccu}
</h2>
<h2>
${state.toptwoweek[1].name} ${state.toptwoweek[1].developer} ${state.toptwoweek[1].ccu}
</h2>
<h2>
${state.toptwoweek[2].name} ${state.toptwoweek[2].developer} ${state.toptwoweek[2].ccu}
</h2>
<h2>
${state.toptwoweek[3].name} ${state.toptwoweek[3].developer} ${state.toptwoweek[3].ccu}
</h2>
<h2>
${state.toptwoweek[4].name} ${state.toptwoweek[4].developer} ${state.toptwoweek[4].ccu}
</h2>
</section>
</section>
`;
