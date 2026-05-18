export function createReviews(): string {
  const reviewsData = [
    {
      author: "Helia E.",
      date: "25-10-24",
      text: "It is one the best soul food spots. Everything is soo delicious",
      rating: 5
    },
    {
      author: "gregory M.",
      date: "23-10-20",
      text: "wing were perfect sauce was amzing ..pouting was even better",
      rating: 5
    },
    {
      author: "Kristina P.",
      date: "23-11-07",
      text: "Delicious wings, portion size was good as well",
      rating: 5
    },
    {
      author: "Creamso",
      date: "4 months ago",
      text: "Pathan was very nice. the chicken wings were great and the Nashville tender was even better. I for sure recommend this place if your craving food. Best comfort food!",
      rating: 5
    },
    {
      author: "Lana R",
      date: "a year ago",
      text: "OH MY GOODNESSSSSS Not just OMGGG ... More",
      rating: 5
    },
    {
      author: "Pritam Pahade",
      date: "a year ago",
      text: "The food was fantastic, and the service was excellent. The staff was very friendly, especially Sanjay, who was extremely helpful in taking our order.",
      rating: 5
    },
    {
      author: "Andrew Furgiuele",
      date: "10 months ago",
      text: "The best wings in the neighborhood. Strong flavours and great portions. The fries hold up when ordered for take out .. they don't become soggy.",
      rating: 5
    },
    {
      author: "Ashley Carambelas",
      date: "10 months ago",
      text: "Fantastic service, loved they were willing to do the wings without the breading for me.",
      rating: 5
    },
    {
      author: "Rabnavaz Pathan",
      date: "a year ago",
      text: "A Flavor Explosion You Can’t Miss! 🌟🌟🌟🌟🌟 If you’re a fan of bold flavors, crispy wings, juicy sandwiches, and rich...",
      rating: 5
    },
    {
      author: "Carolyn M",
      date: "a year ago",
      text: "Wing Lab is amazing! The wings were perfectly cooked—crispy on the outside and juicy on the inside, with just the right amount of sauce.",
      rating: 5
    },
    {
      author: "Anshul Kamboya",
      date: "a year ago",
      text: "I had an amazing experience at Wing Lab! From the moment we walked in, the friendly staff made us feel right at home. The chicken wings were a knockout.",
      rating: 5
    },
    {
      author: "Sam Poulos",
      date: "a year ago",
      text: "My kids loved the chicken tenders and fries, and they are picky eaters! I also enjoyed the Cajun and lemon pepper wings, they were succulent.",
      rating: 5
    },
    {
      author: "Robert S",
      date: "a year ago",
      text: "Ordered from here today for the first time and it was perfection. SO delicous! Everything was perfect! I will definitely be ordering again.",
      rating: 5
    },
    {
      author: "Nimrit",
      date: "a year ago",
      text: "Amazing experience at Wing Lab! The staff was super friendly, attentive, and quick to help with recommendations. Service was smooth and wings were absolutely delicious.",
      rating: 5
    },
    {
      author: "Rakshansh Gandhi",
      date: "a year ago",
      text: "Wing Lab was an absolute treat! Each dish that arrived looked mouthwatering and tasted even better! 🤤🤤 The flavors were spot on.",
      rating: 5
    },
    {
      author: "Adrian Klamas",
      date: "10 months ago",
      text: "Food was delicious! Absolutely would come back again.",
      rating: 5
    },
    {
      author: "Elizabeth Pereira",
      date: "11 months ago",
      text: "Amazing wings….. and great service! Not to mention the amount of food you get for the price. Will be returning.",
      rating: 5
    },
    {
      author: "Jerry Seymour",
      date: "a year ago",
      text: "Absolutely incredible wings (at least what we got the Sriracha honey lime) omg.....ordered 3 times and always amazing.",
      rating: 5
    },
    {
      author: "Navraj Singh",
      date: "a year ago",
      text: "Osm guy Pathan. He cooks delicious food. Very polite and humble guy. Best comfort food!",
      rating: 5
    },
    {
      author: "Ray Stass",
      date: "a year ago",
      text: "I had possibly the crispiest, juiciest and tastiest Nashville Chicken sandwich ever. And their macaroni and cheese is fantastic.",
      rating: 5
    }
  ];

  // Randomly select 4 reviews
  const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
  const selectedReviews = shuffled.slice(0, 4);
  const leftColumn = selectedReviews.slice(0, 2);
  const rightColumn = selectedReviews.slice(2, 4);

  return `
    <section class="reviews-section" id="reviews">
      <div class="reviews-container">
        <h2 class="reviews-title">WHAT THEY SAY</h2>
        
        <div class="reviews-columns">
          <div class="reviews-column">
            ${leftColumn.map(review => `
              <div class="review-item">
                <div class="review-header">
                  <h3 class="review-author">${review.author}</h3>
                  <div class="review-stars">
                    ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                  </div>
                </div>
                <p class="review-text">"${review.text}"</p>
              </div>
            `).join('')}
          </div>
          <div class="reviews-column">
            ${rightColumn.map(review => `
              <div class="review-item">
                <div class="review-header">
                  <h3 class="review-author">${review.author}</h3>
                  <div class="review-stars">
                    ${Array(review.rating).fill('<i class="fas fa-star"></i>').join('')}
                  </div>
                </div>
                <p class="review-text">"${review.text}"</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
