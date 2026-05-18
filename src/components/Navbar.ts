export function createNavbar(): string {
  return `
    <nav class="navbar">
      <button class="navbar-btn navbar-btn-left" id="nav-menu-btn">Menu</button>
      <img src="/logo.png" alt="Winglab Logo" class="navbar-logo" />
      <div class="order-container">
        <button class="navbar-btn navbar-btn-right" id="order-btn">
          <i class="fas fa-utensils shopping-bag-icon"></i>
          <span>Order</span>
        </button>
        <div class="order-dropdown" id="order-dropdown">
          <a href="https://www.ubereats.com/ca/store/wing-lab/bl5p-BAKW0KqjDbugTMP0w?srsltid=AfmBOoqymFnXf8mep8B2fB5Y_9KyXZ8JsXeXgDjP0njMEOyCj6FG1aNA" target="_blank" rel="noopener noreferrer" class="order-option">
            <img src="/uber.png" alt="Uber Eats" class="order-icon" />
            <span>Order with Uber</span>
          </a>
          <a href="https://www.doordash.com/en-CA/store/wing-lab-toronto-31166493?srsltid=AfmBOopN_iSawXTMGX8PiejJ-pM7IgjipTAwCMA-4OkSAHZtz3-nfoQb" target="_blank" rel="noopener noreferrer" class="order-option">
            <img src="/doordash.png" alt="DoorDash" class="order-icon" />
            <span>Doordash</span>
          </a>
          <a href="https://www.clover.com/online-ordering/winglab?srsltid=AfmBOopiLCsto8HJ6JIl1JQ7rI0cuwENjsh6RGtHXg0w1wDrUlVitTsF" target="_blank" rel="noopener noreferrer" class="order-option">
            <img src="/clover.png" alt="Clover" class="order-icon" />
            <span>Clover</span>
          </a>
          <a href="tel:+14167634472" class="order-option">
            <i class="fas fa-phone order-icon phone-icon"></i>
            <span>(416) 763-4472</span>
          </a>
        </div>
      </div>
    </nav>
  `;
}
