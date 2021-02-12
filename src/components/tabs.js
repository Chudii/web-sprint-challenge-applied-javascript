import axios from 'axios';

let tabSelector = document.querySelector('.tabs-container');

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //installments
  const topicHolder = document.createElement('div');
  topics.forEach(str => {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = str;
    topicHolder.appendChild(tab);
  })

  //adding classes
  topicHolder.classList.add('topics');

  return topicHolder;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
    .then(res =>  {
      let tabs = Tabs(res.data.topics);
      selector.appendChild(tabs);
    })
    .catch(err => {
      console.log(err);
    })
}

tabsAppender(tabSelector);

// axios.get(`https://lambda-times-api.herokuapp.com/topics`)
//   .then(res =>  {
//     console.log(res.data.topics);
//   })



export { Tabs, tabsAppender }
