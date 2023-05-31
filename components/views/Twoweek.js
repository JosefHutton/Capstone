import html from "html-literal";

export default (state) => html`
<table id="twoweek">
<tr>
  <th>Name</th>
  <th>Message</th>
</tr>
${state.contacts
  .map(contact => {
    return `<tr><td>${contact.name}</td><td>${contact.message}</td></tr>`;
  })
  .join("")}

</table>
`;
