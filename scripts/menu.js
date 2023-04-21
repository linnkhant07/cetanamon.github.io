const imgLink = "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"

const cards = [
    { image: imgLink, title: 'Mohinga', text: 'A fish and noodle soup that is often considered the national dish of Myanmar.', link: '#' },
    { image: imgLink, title: 'Ohn no khao swè', text: 'A coconut milk-based chicken noodle soup that is a popular breakfast food in Myanmar.', link: '#' },
    { image: imgLink, title: 'Laphet thoke', text: 'A salad made with pickled tea leaves, tomatoes, and a variety of nuts and seeds.', link: '#' },
    { image: imgLink, title: 'Shan khao swe', text: 'A noodle soup that is popular in the Shan State of Myanmar and made with chicken, pork, or beef.', link: '#' },
    { image: imgLink, title: 'Mont hin gar', text: 'A thick, hearty soup made with various meats, vegetables, and chickpea flour.', link: '#' },
    { image: imgLink, title: 'Kyay oh', text: 'A noodle soup that is typically served with pork, fish, or chicken and topped with various condiments.', link: '#' },
    { image: imgLink, title: 'Shan Noodle Soup', text: 'A famous Burmese dish consisting of rice noodles in a chicken broth topped with shredded chicken, sliced onions, and chili oil.', link: '#' },
    { image: imgLink, title: 'Htamane', text: 'A sweet, sticky rice dish made with peanuts, sesame seeds, and coconut flakes.', link: '#' },
  ];
  
  const cardContainer = document.querySelector('#card-container');
  
  cards.forEach(card => {
    const cardHtml = `
      <div class="card">
        <div class="row">
          <div class="col-md-6">
            <img src="${card.image}" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.text}</p>
              <a href="${card.link}" class="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.insertAdjacentHTML('beforeend', cardHtml);
  });