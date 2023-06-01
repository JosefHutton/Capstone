import html from "html-literal";
import myPicture from "../../assets/images/photo23.jpg";

export default () => html`
  <section id="Bio">
  <h2>
    <img src="${myPicture}" class="profile-image" />
    My name is Josef Hutton and I am a Full-Stack Developer and a big PC
    Gamer. </h2>
    <h2>With my vast knowledge of Steam and all things PC, I decided to
    build a website that could help others find the top rated/played games on
    Steam. With this site, there are daily updates of both the All Time Most
    Played Games and the Top Games from the past two weeks. </h2>
    <h2>My goal is to help
    gamers find the best games for them. You can reach me at (git hub link)
    with any comments or questions.
  </h2>
</section>
`;
