export function createFooter(): string {
  return `
    <section class="order-cta-section" id="order-cta">
      <div class="footer-container">
        <h2 class="footer-title">ORDER NOW</h2>
        <div class="footer-order-container">
          <button class="navbar-btn navbar-btn-right footer-order-btn" id="footer-order-btn">
            <i class="fas fa-utensils shopping-bag-icon"></i>
            <span>Order</span>
          </button>
          <div class="order-dropdown footer-dropdown" id="footer-order-dropdown">
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
      </div>
    </section>

    <footer class="main-footer">
      <div class="footer-grid">
        <div class="footer-info">
          <img src="/logo.png" alt="Winglab Logo" class="footer-main-logo" />
          <div class="social-links">
            <a href="https://www.instagram.com/winglab.ca/" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div class="footer-column">
          <h4 class="footer-heading">VISIT US</h4>
          <p class="footer-text">523 Annette St</p>
          <p class="footer-text">Toronto, ON M6P 1S1</p>
          <p class="footer-text">Canada</p>
          <a href="tel:+14167634472" class="footer-link">(416) 763-4472</a>
        </div>

        <div class="footer-column">
          <h4 class="footer-heading">HOURS</h4>
          <div class="hours-row">
            <span class="day">EVERY DAY</span>
            <span class="time">4:00 PM - 2:00 AM</span>
          </div>
        </div>

        <div class="footer-column footer-map-column">
          <h4 class="footer-heading">GET DIRECTIONS</h4>
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.875323565651!2d-79.47953602341516!3d43.66118497110164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b342207000001%3A0x633902f43d8a9e0a!2s523%20Annette%20St%2C%20Toronto%2C%20ON%20M6P%201S1!5e0!3m2!1sen!2sca!4v1715998000000!5m2!1sen!2sca" 
              width="100%" 
              height="150" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="footer-map"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom-bar">
        <div class="footer-legal">
          <a href="/privacy" class="legal-link" id="privacy-link">PRIVACY POLICY</a>
          <a href="/terms" class="legal-link" id="terms-link">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  `;
}
