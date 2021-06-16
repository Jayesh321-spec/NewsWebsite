
//create an ajax GET request for title news and top 10 news
const xhr1 = new XMLHttpRequest();

xhr1.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apikey=88541c42abba40a0ad87dc4b8f81d83a', true);

// when resource is ready

xhr1.onload = function () {
   if (this.status === 200) {
       let json = JSON.parse(this.responseText);
       let articles = json.articles;
       
       // cycle-slider news
        for(let i=0; i<3; i++){
          $(".cycle-url").eq(i).attr("href", articles[i].url);
          $(".cycle-image").eq(i).attr("src", articles[i].urlToImage);
          $(".cycle-overlay").eq(i).text(articles[i].title);
        }

        // top 10 latest news
        for(let i=0; i<10; i++){
          $(".latest-url").eq(i).attr("href", articles[i+3].url);
          $(".latest-image").eq(i).attr("src", articles[i+3].urlToImage);
          $(".latest-des").eq(i).text(articles[i+3].title);
        }
          
    } else {
       console.log("some error occured")
    }
    
}

xhr1.send();

// international news and recently updated news

const xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://newsapi.org/v2/everything?q=international&sources=the-times-of-india&apikey=88541c42abba40a0ad87dc4b8f81d83a', true);


xhr2.onload = function () {
  if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;

       // international news
       for(let i=0; i<4; i++){
        $(".internatinal-url").eq(i).attr("href", articles[i].url);
        $(".international-image").eq(i).attr("src", articles[i].urlToImage);
        $(".international-des").eq(i).text(articles[i].title);
      }

       // recently updated news
       for(let i=0; i<10; i++){
         $(".recent-url").eq(i).attr("href", articles[i+4].url);
         $(".recent-image").eq(i).attr("src", articles[i+4].urlToImage);
         $(".recent-des").eq(i).text(articles[i+4].title);
       }
         
   } else {
      console.log("some error occured")
   }
   
}

xhr2.send();

// for sports news

const xhr3 = new XMLHttpRequest();

xhr3.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=88541c42abba40a0ad87dc4b8f81d83a', true);


xhr3.onload = function () {
  if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;

       // sports news
       for(let i=0; i<7; i++){
         $(".sports-url").eq(i).attr("href", articles[i].url);
         $(".sports-image").eq(i).attr("src", articles[i].urlToImage);
         $(".sports-des").eq(i).text(articles[i].title);
       }
         
   } else {
      console.log("some error occured")
   }
   
}

xhr3.send();

// bussiness news

const xhr4 = new XMLHttpRequest();

xhr4.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=88541c42abba40a0ad87dc4b8f81d83a', true);


xhr4.onload = function () {
  if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;

      // business news
      for(let i=0; i<4; i++){
        $(".bussiness-url").eq(i).attr("href", articles[i].url);
        $(".bussiness-image").eq(i).attr("src", articles[i].urlToImage);
        $(".bussiness-des").eq(i).text(articles[i].title);
      }
         
   } else {
      console.log("some error occured")
   }
   
}

xhr4.send();