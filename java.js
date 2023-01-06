var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

//getApi function is called when the fetchButton is clicked

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = 'https://api.github.com/users/JacobStudstill/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement('li');
        var link = document.createElement('a');
    


        //Set the text of the list element to the JSON response's .html_url property
        link.textContent = data[i].html_url
        link.href = data[i].html_url

        //Append the li element to the id associated with the ul element.
        listItem.appendChild(link);
        repoList.appendChild(listItem);
        
      }
    });
}

fetchButton.addEventListener('click', getApi);
