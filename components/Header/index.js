// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    const heading = document.createElement('h1');
    const date = document.createElement('span');
    const temperature = document.createElement('span');
  
    var today  = new Date();
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    date.textContent = today.toLocaleDateString("en-US", options).toUpperCase();
    heading.textContent = "Lambda Times";
    temperature.textContent = "98°";
  
    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temperature);
  
    header.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');
  
    return header;
  }
  
  const headerContainer = document.querySelector('.header-container');
  headerContainer.appendChild(Header());
