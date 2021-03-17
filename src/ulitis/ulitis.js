const endpoint = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
fetch(endpoint)
    .then((response) => response.json())