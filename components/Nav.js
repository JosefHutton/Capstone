import html from "html-literal";

export default () => html`
<nav>
  <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="index.html">Home</a></li>
      <li class="dropdown"><a href="Raids.html">Raids</a>			<ul>
				<li><a href="link here">Root of Nightmares</a></li>
				<li><a href="link here">King's Fall</a></li>
				<li><a href="link here">Vow of the Disciple</a></li>
				<li><a href="link here">Vault of Glass</a></li>
				<li><a href="link here">Deep Stone Crypt</a></li>
				<li><a href="link here">Garden of Salvation</a></li>
				<li><a href="link here">Last Wish</a></li>
			</ul></li>
      <li><a href= "LootTables.html">Loot Tables</a></li>
      <li><a href= "PVEWeapons.html">PVE Weapons</a></li>
    </ul>
</nav>
`;

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
// export default (links) => html`
//   <nav>
//     <i class="fas fa-bars"></i>
//     <ul class="hidden--mobile nav-links">
//       ${links
//         .map(
//           (link) =>
//             `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
//         )
//         .join("")}
//     </ul>
//   </nav>
// `;
