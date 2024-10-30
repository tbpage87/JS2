  const endpoint = 'https://raw.githubusercontent.com/tbpage87/JS2/refs/heads/main/js30project1/breeds.json';

  const breeds = [];
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => breeds.push(...data));

  function findMatches(wordToMatch, breeds) {
    return breeds.filter(dog => {
      const regex = new RegExp(wordToMatch, 'gi');
      return dog.breed.match(regex) || dog.breed_group.match(regex)
    });
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, breeds);
    const html = matchArray.map(dog => {
      const regex = new RegExp(this.value, 'gi');
      const breedName = dog.breed.replace(regex, `<span class="hl">${this.value}</span>`);
      const breedGroup = dog.breed_group.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <a href="${dog.url}" target="_blank"><span class="name">${breedName}</span></a>
          <span class="breedgroup">${breedGroup}</span>
        </li>`;
    }).join('');
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup', displayMatches);
