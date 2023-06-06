import html from "html-literal";

export default (state) => html`
<section id="Alltime">
  <h1>All Time Most Played</h1>
  <h3>If you are looking for some of the most popular games that Steam has, take a look at our list of the Top 5 most popular games on Steam to date.</h3>
  <hr>
  <h2>
    <span class="name">${state.topalltime[0].name}</span>
    <span class="developer">Developer: ${state.topalltime[0].developer}</span>
    <span class="ccu">Average Player Count: ${state.topalltime[0].ccu}</span>
  </h2>

  <h2>
    <span class="name">${state.topalltime[1].name}</span>
    <span class="developer">Developer: ${state.topalltime[1].developer}</span>
    <span class="ccu">Average Player Count: ${state.topalltime[1].ccu}</span>
  </h2>
  <h2>
    <span class="name">${state.topalltime[2].name}</span>
    <span class="developer">Developer: ${state.topalltime[2].developer}</span>
    <span class="ccu">Average Player Count: ${state.topalltime[2].ccu}</span>
  </h2>
  <h2>
    <span class="name">${state.topalltime[3].name}</span>
    <span class="developer">Developer: ${state.topalltime[3].developer}</span>
    <span class="ccu">Average Player Count: ${state.topalltime[3].ccu}</span>
  </h2>
  <h2>
    <span class="name">${state.topalltime[4].name}</span>
    <span class="developer">Developer: ${state.topalltime[4].developer}</span>
    <span class="ccu">Average Player Count: ${state.topalltime[4].ccu}</span>
  </h2>
  <h6>*This list is updated once every 24 hours.</h6>
</section>
`;
