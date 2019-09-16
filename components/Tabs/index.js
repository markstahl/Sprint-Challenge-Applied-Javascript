// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');
topics.appendChild(Tab('All'));

const topicData = fetchData('https://lambda-times-backend.herokuapp.com/topics');

appendTopics(topics, topicData);

async function fetchData(remoteDataSourceUri) {
  return await axios.get(remoteDataSourceUri);
}

function appendTopics(target, data) {

  data.then(source => {
    const topics = source.data.topics;
    const count = topics.length;

    for (let i = 0; i <= count-1; i++) {
      const currentData = topics[i];
      
      target.appendChild(Tab(currentData));
    }
  })
  .catch(a => {
    console.log(a);
  });
}

function Tab(data) {
  const tab = document.createElement('div');
  tab.textContent = data;
  tab.classList.add('tab');

  return tab;
}