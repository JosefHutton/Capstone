import html from "html-literal";
import myPicture from "../../assets/images/playercount.png";
import myPicture2 from "../../assets/images/dev.png";
export default () => html`
<section id="multiplayer">
  <div class="layout">
    <div class="column">
      <img src="your_image_url1.jpg" alt="Image 1">
      <p>Text 1</p>
    </div>
    <div class="column">
    <img src=${myPicture2} />
      <p>Text 2</p>
    </div>
    <div class="column white-background">
      <img src=${myPicture} />
      <p>Text 3</p>
    </div>
    <div class="column">
      <img src="your_image_url4.jpg" alt="Image 4">
      <p>Text 4</p>
    </div>
    <div class="column">
    <img src=${myPicture2} />
      <p>Text 5</p>
    </div>
    <div class="column white-background">
      <img src=${myPicture} />
      <p>Text 6</p>
    </div>
    <div class="column">
      <img src="your_image_url7.jpg" alt="Image 7">
      <p>Text 7</p>
    </div>
    <div class="column">
    <img src=${myPicture2} />
      <p>Text 8</p>
    </div>
    <div class="column white-background">
      <img src=${myPicture} />
      <p>Text 9</p>
    </div>
    <div class="column">
      <img src="your_image_url9.jpg" alt="Image 9">
      <p>Text 10</p>
    </div>
    <div class="column">
    <img src=${myPicture2} />
      <p>Text 11</p>
    </div>
    <div class="column white-background">
      <img src=${myPicture} />
      <p>Text 12</p>
    </div>
    <div class="column">
      <img src="your_image_url9.jpg" alt="Image 9">
      <p>Text 13</p>
    </div>
    <div class="column">
    <img src=${myPicture2} />
      <p>Text 14</p>
    </div>
    <div class="column white-background">
      <img src=${myPicture} />
      <p>Text 15</p>
    </div>
  </div>
</section>
`;
