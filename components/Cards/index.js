// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

const articleData = fetchData('https://lambda-times-backend.herokuapp.com/articles');
console.log("articleData:");
console.log(articleData);

appendArticles(cards, articleData);

async function fetchData(remoteDataSourceUri) {
  return await axios.get(remoteDataSourceUri);
}

function appendArticles(target, data) {

    data.then(source => {
      const topics = source.data.articles;
      console.log(`Status: `+ source.status);
      console.log('topics data:');
      console.log(topics);
  
      const articleTopicNames = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];
      const articleTopics = [source.data.articles.bootstrap, source.data.articles.javascript, source.data.articles.jquery, source.data.articles.node, source.data.articles.technology];
      console.log(articleTopics);
      
      const topicsCount = articleTopics.length;
      console.log('topicCount: '+ topicsCount);
  
      for (let i = 0; i <= topicsCount-1; i++) {
        const currentTopicName = articleTopicNames[i];
        const currentTopic = articleTopics[i];
  
        
        console.log(currentTopicName);
        console.log(currentTopic);
  
        const articleCount = currentTopic.length;
        console.log('articleCount: '+ articleCount);
        
        for (let i = 0; i <= articleCount-1; i++) {
          target.appendChild(Article(currentTopic[i]));
        }
      }
    })
    .catch(e => {
      console.log(e);
    });
  }

function Article(article) {
    const card = document.createElement('div');
      const headline = document.createElement('div');
      const author = document.createElement('div');
        const imgContainer = document.createElement('div');
          const image = document.createElement('img');
        const name = document.createElement('span');
  
    headline.textContent = article.headline;
      image.setAttribute('src',article.authorPhoto);
      name.textContent = article.authorName;
  
    card.appendChild(headline);
    card.appendChild(author);
      author.appendChild(imgContainer);
        imgContainer.appendChild(image);
      author.appendChild(name);
  
    card.classList.add('card');
      headline.classList.add('headline');
      author.classList.add('author');
        imgContainer.classList.add('img-container');
  
    return card;
  }
