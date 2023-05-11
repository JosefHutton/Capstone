import html from "html-literal";


export default () => html`
<div class="footerclass">
  <footer>
    <ul class="footer-links">
      <li><a href="link to home page">Home</a></li>
      <li><a href="link to contact us page">Contact Us</a></li>
      <li><a href="link to bio page">Bio</a></li>
    </ul>
  </footer>
</div>
`;

// export default (footerlinks) => html`
//   <nav>
//     <i class="fas fa-bars"></i>
//     <ul class="hidden--mobile nav-links">
//       ${footerlinks
//         .map(
//           (link) =>
//             `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
//         )
//         .join("")}
//     </ul>
//   </nav>
// `;
