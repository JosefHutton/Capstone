import html from "html-literal";
import myPicture4 from "../../assets/images/single-player-games.jpg";


export default (state) => html`
  <section id="Contactus">
    <body>
      <div class="left-section">
        <h2>
          If you liked the site, feel free to use our contact form to leave us a
          short message.
        </h2>
        <img src=${myPicture4} />
      </div>

      <div class="right-section">
        <div class="contactform">
          <h2>Contact Us</h2>
          <form action="" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="phone">Phone (optional):</label>
            <input type="tel" id="phone" name="phone" />

            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              resize="vertical"
              required
            ></textarea>

            <div class="checkbox-group">
              <p>Where did you find our site? (Check up to three):</p>
              <label
                ><input
                  type="checkbox"
                  name="source"
                  value="Site 1"
                />LinkedIn</label
              >
              <label
                ><input
                  type="checkbox"
                  name="source"
                  value="Site 2"
                />Google</label
              >
              <label
                ><input
                  type="checkbox"
                  name="source"
                  value="Site 3"
                />SavvyCoders</label
              >
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </body>
  </section>
`;
