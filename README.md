# What are Web Components?

- Set of **web platform APIs** for crating custom, reuseable html tags for use in web pages/web apps
- Completely vanilla JavaScript - no 3rd party libraries need!

## What are the basic elements of Web Components?

1. Custom Elemetns
2. The Shadow DOM
3. HTML Templates

### Custom Elements

- Create your own custom HTML tags
- Create custom classes
- Provides lifecycle methods
- Create a class for your element: `class AppDrawer extends HTMLElement`
- Bind to a custom tag with **define** method: `window.customElements.define('app-drawer', AppDrawer)`

### Type of LifeCycle Methods

- `constructor:` Called when instance of element is created or upgraded.
- `connectedCallback:` Called when element inserted into DOM
- `disconnectedCallback:` Called when element is removed from DOM
- `attributeChangedCallback(attrName, oldVal, newVal)`: called when attribute added, removed, updated or replaced

### Shadow DOM

- Used for self-contained components; **encapuslates styles and markup**
- How to use: Create with `element.attachShadow({mode: open}}`
- THis also creates a **shadowRoot** that we then reference and utilize

### HTML Templates

- Define the encapulsated markup of our web component
- Template tag stores markup on the page
- Despite the name, both HTLM and CSS are included in templates
- Uses _slots_ to make template dynamic, for adding custom text for example
