import html from "html-literal";
import myPicture from "../../assets/images/AllTime.jpg";
import myPicture2 from "../../assets/images/Feedback.jpg";
import myPicture3 from "../../assets/images/Multiplayer.jpg";
import myPicture4 from "../../assets/images/SinglePlayer.jpg";

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
        <p>User Feedback</p>
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
`;
