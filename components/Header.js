import html from "html-literal";
import myPicture from "../assets/images/steam_logo_resized.jpg"

export default () => html`
<header>
  <img src=${myPicture} alt="pic here" />
  <div class="logo">
    <p>Game Finder</p>
  </div>
</header>
`;
