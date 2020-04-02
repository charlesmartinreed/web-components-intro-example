// 1a. Create the template
// if you're wondering how we added inner text or dynamic text, see the <slot /> tag
const template = document.createElement("template");
template.innerHTML = `
    <style>
    .contact-card {
        background: #f4f4f4;
        width: 35vw;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1.7rem;
        margin-bottom: 20px;
        // border-bottom:  rgba(25, 43, 43, 0.6) 3px solid;
        padding: 1.7rem;
        box-shadow: inset 4px 4px 20px rgba(25, 43, 43, 0.2), 2px 2px 8px rgba(25, 43, 43, 0.4);
        border-radius: 4px;
    }

    .contact-card img {
        width: 150px;
        height: 150px;
        border-radius: 3px;
    }

    .contact-card #btn-toggle-info {
        cursor: pointer;
        background: dodgerblue;
        color: whitesmoke;
        border: 0;
        border-radius: 5px;
        padding: 0.5rem 1.2rem;
    }

        h3 {
            color: seagreen;
            letter-spacing: 0.05rem;
        }

        p {
            letter-spacing: 0.08rem;
            font-size: 12px;
        }
    </style>
    <div class="contact-card">
            <img />
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email"/></p>
                <p><slot name="phone"/></p>
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
    this.shadowRoot.querySelector("h3").innerText = `${this.getAttribute(
      "user_name"
    )}`;

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

// 4. Define the Custom Element
// takes two args: the html tag and the Class to tie that html element to
window.customElements.define("contact-card", ContactCard);
