// 1. Create the class
class ContactCard extends HTMLElement {
  constructor() {
    // call the parent class' constructor
    super();

    // 2. Create SHADOW DOM to encapsulate styles
    // this.attachShadow({ mode: "open" });

    // note that we can access data attributes
    this.innerHTML = `<h3>This is a Contact Card for ${this.getAttribute(
      "user_name"
    )}.</h3>`;
  }
}

// 3. Define the Custom Element
// takes two args: the html tag and the Class to tie that html element to
window.customElements.define("contact-card", ContactCard);
