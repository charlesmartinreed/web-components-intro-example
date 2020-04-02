// 1a.
const template = document.createElement("template");
template.innerHTML = `
    <style>
        h3 {
            color: goldenrod;
        }
    </style>
    <div class="contact-card">
            <img />
        <div>
            <h3></h3>
            <div class="info">
                <p>EMAIL</p>
                <p>PHONE</p>
            </div>
            <button id="btn-toggle-info">Hide Info</button>
        </div>
    </div>
`;

// 1b. Create the class
class ContactCard extends HTMLElement {
  constructor() {
    // call the parent class' constructor
    super();

    // 2. Create SHADOW DOM to encapsulate styles
    this.attachShadow({ mode: "open" });

    // 3. Attach the template for your reusable element to the shadow root
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // note that we can access data attributes
    this.shadowRoot.querySelector(
      "h3"
    ).innerText = `Contact card for ${this.getAttribute("user_name")}`;

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

// 4. Define the Custom Element
// takes two args: the html tag and the Class to tie that html element to
window.customElements.define("contact-card", ContactCard);
