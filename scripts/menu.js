const cards = [
    { image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80', title: 'Card 1', text: 'Some text for card 1', link: '#' },
    { image: '', title: 'Card 2', text: 'Some text for card 2', link: '#' },
    { image: '', title: 'Card 3', text: 'Some text for card 3', link: '#' },
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
              <a href="${card.link}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.insertAdjacentHTML('beforeend', cardHtml);
  });