let container=document.getElementById("mynews")
function main(){
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=92887cb9c43c409da7fb7995f04dd73c`)

        .then(res => res.json())
        .then(data => {
                let news = data.articles
                //  console.log("data",news)
                showNews(news)
        })
        .catch(error =>{
                console.error("Error:",error);
        });
}

main()

function showNews(news){
        container.innerHTML=null;
        // console.log(news)
        news.forEach(news => {
                let master_div=document.createElement("div")
                master_div.setAttribute("class","News_cont")

//head div cont
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

                 master_div.onclick=function(){
                         window.location.href="../CodingEvalution/news.html"
                         clicked_news(news)
                 }

                 head_div.append(headlines,author,publish)

                 dis_div.append(des)
                 img_div.append(img)

                master_div.append(head_div,dis_div,img_div)
                container.append(master_div)
        });
}

function clicked_news(news){
      
        if (localStorage.getItem("clicked_News")===null){
             localStorage.setItem("clicked_News",JSON.stringify([]));   
        }
        let data=JSON.parse(localStorage.getItem("clicked_News"));
          data[0]=news;
          localStorage.setItem("clicked_News",JSON.stringify(data))

        //   window.location.href="..\CodingEvalution\search.html"
}