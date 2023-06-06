import html from "html-literal";
import myPicture from "../../assets/images/photo23.jpg";

export default () => html`
  <section id="Bio">
  <h2>
    <img src="${myPicture}" class="profile-image" />
    My name is Josef Hutton and I am a Full-Stack Developer and a big PC
    Gamer. I am also a veteran of the US Army and I enjoy learning about anything and everything involved with how computers are built and how they function.</h2>
    <h2>After leaving the Army, I wanted to set focus on a new career in tech which ultimately led me to taking a course through Savvy Coders. With the knowledge I have learned in that program, I have created the site you are currently viewing. </h2>
    <h2>With my vast knowledge of Steam and all things PC, I decided to
    build a website that could help others find the top rated/played games on
    Steam. With this site, there are daily updates of all catagories as well as the lead developer and the average peak players. </h2>
    <h2>My goal is to help
    gamers find the best games for them. You can reach me at <a href="https://github.com/JosefHutton">github.com/JosefHutton</a>
    with any comments or questions.
  </h2>
</section>
`;
