import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}

  `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

if (state.view === "Contactus") {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const inputList = event.target.elements;
    console.log("Input Element List", inputList);

    const requestData = {
      name: inputList.name.value,
      email: inputList.email.value,
      phone: inputList.phone.value,
      message: inputList.message.value,
    };
    console.log("request Body", requestData);

    axios
      .post(`${process.env.CONTACTUS}/Contactus`, requestData)
      .then(response => {
        store.Twoweek.contacts.push(response.data);
        router.navigate("/Twoweek");
      })
      .catch(error => {
        console.log("It puked", error);
      });
  });
}
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View

case "Alltime":
  // New Axios get request utilizing already made environment variable
  axios
    .get(`http://localhost:4040/steamspy/top100forever`)
    .then(response => {
      // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
      const data = Object.values(response.data)
      store.Alltime.topalltime = data.slice(0,5);
      console.log(store.Alltime.topalltime);
      done();
    });
    break;

    // case "Twoweek":
    //   // New Axios get request utilizing already made environment variable
    //   axios
    //     .get(`http://localhost:4040/steamspy/top100in2weeks`)
    //     .then(response => {
    //       // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
    //       const data = Object.values(response.data)
    //       store.Twoweek.toptwoweek = data.slice(0,5);
    //       console.log(store.Twoweek.toptwoweek);
    //       done();
    //     });
    //     break;

        case "Multiplayer":
      // New Axios get request utilizing already made environment variable
      axios
        .get(`http://localhost:4040/steamspy/tag&tag=Multiplayer`)
        .then(response => {
          // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
          const data = Object.values(response.data)
          store.Multiplayer.topmultiplayer = data.slice(0,5);
          console.log(store.Multiplayer.topmultiplayer);
          done();
        });
        break;

        case "Singleplayer":
          // New Axios get request utilizing already made environment variable
          axios
            .get(`http://localhost:4040/steamspy/tag&tag=Singleplayer`)
            .then(response => {
              // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
              const data = Object.values(response.data)
              store.Singleplayer.topsingleplayer = data.slice(0,5);
              console.log(store.Singleplayer.topsingleplayer);
              done();
            });
            break;

      default:
        done();
    }
  },
  already: (params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  },
});


router
.on({
  "/": () => render(),
  ":view": (params) => {
    let view = capitalize(params.data.view);
    console.log(params);
    if (store.hasOwnProperty(view)) {
      render(store[view]);
    } else {
      render(store.Viewnotfound);
      console.log(`View ${view} not defined`);
    }
  },
})
.resolve();


