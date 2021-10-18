console.log("got")
let news=JSON.parse(localStorage.getItem("clicked_News"));

let container=document.getElementById("mynews");
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

                 let cont=document.createElement("p");
                 cont.innerText=news.content

                //  master_div.onclick=function(){
                //          window.location.href="../CodingEvalution/news.html"
                //          clicked_news(news)
                //  }

                 head_div.append(headlines,author,publish)

                 dis_div.append(des)
                 img_div.append(img)

                master_div.append(head_div,dis_div,img_div,cont)
                container.append(master_div)
        });
}

showNews(news)

// let news=JSON.parse(localStorage.getItem("clicked_News"));