export function renderHomeElement(){
  document.getElementById('content').innerHTML = 
  `
    <div class="home-page page">
      <div class="content-left">
        <img src="https://s.namemc.com/3d/skin/body.png?id=a63c59468ceae536&model=slim&width=250&height=250" alt="skin">
      </div>
      <div class="content-right">
        <h1>Welcome to Crafty Cuisine!</h1>
        <p>Dive into the culinary world of Minecraft! Whether you're a seasoned player or new to the game, our
          restaurant
          brings you the finest, blockiest dishes you can imagine. From freshly harvested crops to expertly cooked
          meats,
          our menu is crafted with the highest quality ingredients from all corners of Minecraftia.</p>
        <h2>Why Choose Crafty Cuisine?</h2>
        <ul>
          <li>Authentic Minecraft Dishes: Enjoy a wide range of meals that will satisfy your hunger bar and delight your
            senses.</li>
          <li>Blocky Ambiance: Step into our pixelated dining area where every block has been placed with care.</li>
          <li>Delivery to Any Biome: Whether you're in the Nether, the End, or the Overworld, we deliver straight to
            your
            door... if you have one!</li>
        </ul>
      </div>
    </div>
  `
}