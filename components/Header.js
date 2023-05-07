import html from "html-literal";
import myPicture from "../assets/images/destiny2logo.jpg"

export default () => html`
<header>
  <div class="logo">Destiny 2 DPS</div>
  <img src=${myPicture} />
</header>
`;
