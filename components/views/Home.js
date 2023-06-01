import html from "html-literal";
import myPicture from "../../assets/images/AllTime.jpg";
import myPicture2 from "../../assets/images/Feedback.jpg";
import myPicture3 from "../../assets/images/Multiplayer.jpg";
import myPicture4 from "../../assets/images/SinglePlayer.jpg";

export default (state) => html`
<section id="home">
  <div class="box">
    <a href="Alltime">
      <div class="image-container">
        <img src=${myPicture} />
        <div class="text">
          <p>Top Played Games All Time</p>
        </div>
      </div>
    </a>
  </div>

  <div class="box">
    <a href="Twoweek">
      <div class="image-container">
        <img src=${myPicture2} />
        <div class="text">
          <p>User Feedback</p>
        </div>
      </div>
    </a>
  </div>

  <div class="box">
    <a href="Multiplayer">
      <div class="image-container">
        <img src=${myPicture3} />
        <div class="text">
          <p>Top Played</p>
          <p>Multiplayer</p>
        </div>
      </div>
    </a>
  </div>

  <div class="box">
    <a href="Singleplayer">
      <div class="image-container">
        <img src=${myPicture4} />
        <div class="text">
          <p>Top Played</p>
          <p>Singleplayer</p>
        </div>
      </div>
    </a>
  </div>
</section>
`;
