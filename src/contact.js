export function renderContactElement(){
  document.getElementById('content').innerHTML = 
  `
  <div class="contact-page page">
    <h1>Contact Us</h1>
    <p>
      We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, or just want
      to chat about Minecraft, we're here to help.
    </p>

    <div class="contact-info">
      <h2 class="contact-heading">Crafty Cuisine HQ</h2>
      <ul class="contact-details">
        <li>Location: Village #73, Plains Biome, Overworld</li>
        <li>Phone: +123-MINECRAFT</li>
        <li>Email: <a href="mailto:info@craftycuisine.mc" class="contact-email">info@craftycuisine.mc</a>
        </li>
        <li>Hours: Open 24/7 - We know adventurers get hungry at all hours!</li>
      </ul>
    </div>
  </div>
  `
}