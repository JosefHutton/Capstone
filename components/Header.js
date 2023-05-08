import html from "html-literal";
import myPicture from "../assets/images/destiny2logo.jpg"

export default () => html`
<header>
  <img src=${myPicture} alt="Destiny 2 DPS" />
  <div class="logo">
    <p>Destiny 2 DPS</p>
  </div>
</header>
`;
