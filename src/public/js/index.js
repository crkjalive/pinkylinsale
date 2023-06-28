console.log("%cNodeJS 2023", "font-size:2rem; color:lime;");

const header = document.getElementById("header_container");
const footer = document.getElementById("footer_container");

header.innerHTML = `
<nav class="nav_container">
  <ul>
    <a href="/"><li>🍷 Pinkylin</li></a>
    <a href="/sales"><li>🛒 Registered</li></a>
    <a href="/sales/separado"><li>🥁</li></a>
    <a href="/search" class="primario"><li>REGISTER</li></a>
    <a href="/sales/date"><li>🏀 Search</li></a>
    <a href="/products"><li>🏐 Code</li></a>
    <a href="/products/stock"><li>🎱 Stock</li></a>
    <a href="/products/searchStock"><li>🚚 Add Stock</li></a>
    <a href="/bills"><li>📊</li></a>
    <a href="/bills/add"><li>📠</li></a>
  </ul>
</nav>`;

footer.innerHTML = `
  <p class="text1">App para registrar las ventas de <strong>Pinkylin Moda Intima</strong></p>
  <p class="text2">Creada por @CRKJ para Pinkylin Moda Intima 😎👍 2023</p>
  <p class="tech_text">
    <img src="/img/mysql.svg" />
    <img src="/img/html5.svg" />
    <img src="/img/css3.svg" />
    <img src="/img/javascript.svg" />
    <img src="/img/nodejs.svg" />
  </p>
`;
