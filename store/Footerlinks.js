// export default [
//   { title: "Bio", text: "Bio" },
//   { title: "Contactus", text: "Contact Us" },
// ]

export default (footerlinks) => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          (link) =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
