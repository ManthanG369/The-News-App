fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=92887cb9c43c409da7fb7995f04dd73c`)

.then(res => res.json())
.then(data => console.log("data",data))