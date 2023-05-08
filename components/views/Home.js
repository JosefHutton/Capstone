import html from "html-literal";
import myPicture from "../../assets/images/2023_Root_of_Nightmares_Raid_PressKit_Raid_Compressed_001.jpg"
import myPicture2 from "../../assets/images/King_s_Fall_Center_4K.jpg"
import myPicture3 from "../../assets/images/Destiny2ForsakenPack_Bungie.jpg"
import myPicture4 from "../../assets/images/2023_Root_of_Nightmares_Raid_PressKit_Gear_16x9_Compressed_001.jpg"

export default (state) => html`
<section id="home">
<div class="box">
<img src=${myPicture} />
<div class="text">
  <p>Raid Info</p>
</div>
</div>
<div class="box">
<img src=${myPicture2} />
<div class="text">
  <p>Lost Sector</p>
</div>
</div>
<div class="box">
  <a href="">
  </a>
  <img src=${myPicture3} />
  <div class="text">
  <p>insert text here, insert text here, insert text here, insert text here</p>
</div>
</div>
<div class="box">
<img src=${myPicture4} />
<div class="text">
  <p>insert text here, insert text here, insert text here, insert text here</p>
</div>
</div>
</section>
`;

// add addEventListener for links maybe
