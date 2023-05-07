import html from "html-literal";
import myPicture from "../../assets/images/2023_Root_of_Nightmares_Raid_PressKit_Gear_16x9_Compressed_001.jpg"
import myPicture2 from "../../assets/images/King_s_Fall_Center_4K.jpg
import myPicture3 from "../../assets/images/Destiny2ForsakenPack_Bungie.jpg
import myPicture4 from "../../assets/images/2023_Root_of_Nightmares_Raid_PressKit_Gear_16x9_Compressed_001.jpg"

export default (state) => html`
<section id="home">
<div class="box">
<img src=${myPicture} />
  <p>insert text here, insert text here, insert text here, insert text here</p>
</div>
<div class="box2">
<img src=${myPicture2} />
  <p>insert text here, insert text here, insert text here, insert text here</p>
</div>
<div class="box3">
  <a href="">
  </a>
  <img src=${myPicture3} />
  <p>insert text here, insert text here, insert text here, insert text here</p>
</div>
<div class="box4">
<img src=${myPicture4} />
  <p>insert text here, insert text here, insert text here, insert text here</p>
</div>
</section>
`;
