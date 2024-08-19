export function renderMenuElement(){
  document.getElementById('content').innerHTML = 
  `
  <div class="menu-page page">
    <h1>Menu</h1>
    <div class="menu-section">
      <h2>"Appetizers"</h2>
      <div class="menu-grid">
        <div class="menu">
          <div class="menu-img">
            <img src="https://pm1.aminoapps.com/6344/c00161da13bad9db9af201db3edd24d42d0e0848_00.jpg"
              alt="baked-potato">
          </div>
          <h3>Baked Potato</h3>
          <p>
            A warm, crispy baked potato, lightly salted and perfect for a quick snack or a starter to your meal.
          </p>
        </div>
        <div class="menu">
          <div class="menu-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBF02lOAnt_TIPO4V-WdBkVdk5SoPxIxVJQ&s"
              alt="bread">
          </div>
          <h3>Fresh Bread</h3>
          <p>
            Freshly baked loaves of bread, soft on the inside with a golden crust. Served with a pat of butter.
          </p>
        </div>
        <div class="menu">
          <div class="menu-img">
            <img src="https://art.pixilart.com/b5cbba1499bf721.png" alt="mushroom-stew">
          </div>
          <h3>Mushroom Stew</h3>
          <p>
            A hearty stew made from red and brown mushrooms. This earthy dish is perfect to warm you up before the
            main course.
          </p>
        </div>
      </div>
      <h2>"Main Courses"</h2>
      <div class="menu-grid">
        <div class="menu">
          <div class="menu-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_2mMqHY2GVpNIRVbHL856aTbbsqcH920Dg&s"
              alt="cooked-beef">
          </div>
          <h3>Cooked Beef</h3>
          <p>
            A juicy steak grilled to perfection. Simple, hearty, and sure to restore your hunger bar after a long day
            of adventuring.
          </p>
        </div>
        <div class="menu">
          <div class="menu-img">
            <img src="https://media.forgecdn.net/avatars/thumbnails/346/329/256/256/637495019493016696.png"
              alt="cooked-porkchop">
          </div>
          <h3>Cooked Porkchop</h3>
          <p>
            Tender and flavorful porkchop, cooked over a campfire. A favorite among villagers and adventurers alike.
          </p>
        </div>
        <div class="menu">
          <div class="menu-img">
            <img
              src="https://st2.depositphotos.com/37742130/44855/v/450/depositphotos_448554546-stock-illustration-pixel-art-raw-mutton-isolated.jpg"
              alt="cooked-mutton">
          </div>
          <h3>Cooked Mutton</h3>
          <p>
            A savory mutton chop, slow-cooked to bring out the rich flavors. Perfect for a cozy meal by the fire.
          </p>
        </div>
      </div>
      <h2>"Desserts"</h2>
      <div class="menu-grid">
        <div class="menu">
          <div class="menu-img">
            <img src="https://i.pinimg.com/originals/03/15/f3/0315f352d3132a6852de333cd4bbf4f7.png"
              alt="minecraft-cake">
          </div>
          <h3>Minecraft Cake</h3>
          <p>
            The iconic blocky cake, perfect for any celebration! With layers of sweetness, it's a must-have on any
            adventurer's table.
          </p>
        </div>
        <div class="menu">
          <div class="menu-img">
            <img src="https://art.pixilart.com/e8680316408f212.png" alt="pumpkin-pie">
          </div>
          <h3>Pumpkin Pie</h3>
          <p>
            A classic dessert made from the finest pumpkins, eggs, and sugar. Sweet, spiced, and absolutely delicious!
          </p>
        </div>
        <div class="menu">
          <div class="menu-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbuczdD1cMDh7iA4RSXO_aYXnd6bLD7kp0A&s"
              alt="cookies">
          </div>
          <h3>Cookies</h3>
          <p>
            Delightfully simple and sweet, these cookies are made with cocoa beans and wheat, offering the perfect
            treat after a hard day's work.
          </p>
        </div>
      </div>
    </div>
  </div>
  `
}