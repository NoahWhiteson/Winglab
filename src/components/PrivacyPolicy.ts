export function createPrivacyPolicy(): string {
  return `
    <div class="policy-page">
      <div class="policy-container">
        <h1 class="policy-title">PRIVACY POLICY</h1>
        <p class="policy-date">Last Updated: May 17, 2026</p>
        
        <section class="policy-section">
          <h2>1. INTRODUCTION</h2>
          <p>Welcome to Wing Lab. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
        </section>

        <section class="policy-section">
          <h2>2. THE DATA WE COLLECT</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes payment card details (processed by our third-party payment providers).</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>3. HOW WE USE YOUR DATA</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To process and deliver your order.</li>
            <li>To manage our relationship with you.</li>
            <li>To improve our website, products/services, marketing or customer relationships.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. THIRD-PARTY LINKS</h2>
          <p>This website includes links to third-party websites (such as Uber Eats, DoorDash, and Clover). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
        </section>

        <section class="policy-section">
          <h2>5. CONTACT US</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
          <p>Email: privacy@winglab.ca<br>
          Address: 523 Annette St, Toronto, ON M6P 1S1</p>
        </section>
        
        <div class="policy-back">
          <a href="/" class="back-link">← BACK TO HOME</a>
        </div>
      </div>
    </div>
  `;
}
