import html from "html-literal";
import myPicture from "../../assets/images/all_time_top_resized.png";
import myPicture2 from "../../assets/images/most_played_2week_resized.png";
import myPicture3 from "../../assets/images/multiplayer-games.jpg";
import myPicture4 from "../../assets/images/single-player-games.jpg";

export default (state) => html`
  <section id="home">
    <div class="box">
      <div class="text">
        <a href="Alltime">
          <img src=${myPicture} />
        </a>
        <p>Top Played Games</p>
        <p>All Time</p>
      </div>
    </div>

    <div class="box">
      <div class="text">
        <a href="Twoweek">
          <img src=${myPicture2} />
        </a>
        <p>Most Played Games</p>
        <p>Last Two Weeks</p>
      </div>
    </div>

    <div class="box">
      <div class="text">
        <a href="Multiplayer">
          <img src=${myPicture3} />
        </a>
        <p>Top Played</p>
        <p>Multiplayer</p>
      </div>
    </div>

    <div class="box">
      <div class="text">
        <a href="Singleplayer">
          <img src=${myPicture4} />
        </a>
        <p>Top Played</p>
        <p>Singleplayer</p>
      </div>
    </div>
  </section>

  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
