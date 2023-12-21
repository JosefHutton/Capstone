import html from "html-literal";
import myPicture4 from "../../assets/images/Multiplayer.jpg";

// Define an array to store the comments
let comments = [];

export default (state) => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const sources = Array.from(
      document.querySelectorAll('input[name="source"]:checked')
    ).map((checkbox) => checkbox.value);

    // Create a new comment object
    const comment = {
      name,
      email,
      phone,
      message,
      sources,
      timestamp: new Date().getTime(),
    };

    // Add the new comment to the comments array
    comments.push(comment);

    // Remove the oldest comment if there are more than 10 comments
    if (comments.length > 10) {
      comments.shift();
    }

    // Clear the form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    document.querySelectorAll('input[name="source"]:checked').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Render the comments
    renderComments();

    // You can also send the comment data to the server or perform any other necessary actions here
  };

  // Function to render the comments
  const renderComments = () => {
    const commentsContainer = document.getElementById("comments-container");

    // Clear the comments container
    commentsContainer.innerHTML = "";

    // Render each comment
    comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.innerHTML = `
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
        <p>Phone: ${comment.phone}</p>
        <p>Message: ${comment.message}</p>
        <p>Sources: ${comment.sources.join(", ")}</p>
        <p>Timestamp: ${new Date(comment.timestamp).toLocaleString()}</p>
        <hr>
      `;
      commentsContainer.appendChild(commentElement);
    });
  };

  return html`
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
            <h1>Contact Us</h1>
            <form action="" method="post" id="contact" onsubmit=${handleSubmit}>
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

        <div id="comments-container"></div>
      </body>
    </section>
  `;
};
