let container=document.getElementById("mynews")

function SearchNews(){
        let query=document.getElementById("search").value
       
        fetch(`
        https://newsapi.org/v2/everything?q=${query}&from=2021-09-18&sortBy=publishedAt&apiKey=3b1c44bf80fc4f6e85e4eed1c84c05f2`)

        .then(res => res.json())
        .then(data => {
                let news = data.articles
                 console.log("data",news)
                showNews(news)
        })
        .catch(error =>{
                console.error("Error:",error);
        });
}

function showNews(news){
        container.innerHTML=null;
        // console.log(news)
        news.forEach(news => {
                let master_div=document.createElement("div")
                master_div.setAttribute("class","News_cont")


                let head_div=document.createElement("div")
                let headlines=document.createElement("h3")
                headlines.innerText=news.title

                let author=document.createElement("h4")
                    author.innerText=news.author
                let publish=document.createElement("h5")  
                publish.innerText=news.publishedAt


                let dis_div=document.createElement("div")

                  let des=document.createElement("p");
                  des.innerText=news.description


                let img_div=document.createElement("div")
                 let img=document.createElement("img")
                 img.src=news.urlToImage

                 head_div.append(headlines,author,publish)

                 dis_div.append(des)
                 img_div.append(img)

                master_div.append(head_div,dis_div,img_div)
                container.append(master_div)
        });
}
