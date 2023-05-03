import html from "html-literal";
import * as views from "./views";

export default () => html`
  ${views["Home"]()},
  ${views["LootTables"]()},
  ${views["PVEWeapons"]()},
  ${views["Raids"]()}
`;
