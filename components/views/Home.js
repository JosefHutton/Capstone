import html from "html-literal";
import myPicture from "../../assets/images/all_time_top_resized.png"
import myPicture2 from "../../assets/images/most_played_2week_resized.png"
import myPicture3 from "../../assets/images/multiplayer-games.jpg"
import myPicture4 from "../../assets/images/single-player-games.jpg"

export default (state) => html`
<section id="home">
<div class="box">
<img src=${myPicture} />
<div class="text">
  <p>Top Played Games</p>
  <p>All Time</p>
</div>
</div>
<div class="box">
<img src=${myPicture2} />
<div class="text">
<p>Most Played Games</p>
  <p>Last Two Weeks</p>
</div>
</div>
<div class="box">
  <a href="">
  </a>
  <img src=${myPicture3} />
  <div class="text">
  <p>Top Played</p>
  <p>Multiplayer</p>
</div>
</div>
<div class="box">
<img src=${myPicture4} />
<div class="text">
  <p>Top Played</p>
  <p>Singleplayer</p>
</div>
</div>
</section>
<h3>
The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
</h3>
`;

// add addEventListener for links maybe
