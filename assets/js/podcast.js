const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';

const RSS_URL = `https://anchor.fm/s/5cf3cd00/podcast/rss`;
 
fetch(parseUrl + RSS_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.items);
        const item = data.items;

        console.log(item[0].author);

        console.log(item[0].thumbnail);

        console.log(item[0].title);

        console.log(item[0].enclosure.link);

        // const renderRssItems = (item) => (
        //     <div class="rss-container">
        //         <img src={item.thumbnail} alt="" />
        //     </div>
        // )
        // const items = data.querySelectorAll("item");
        // const renderRssItems = (items) => (
        //     <div class="rss-container">
        //         <img src={items.thumbnail} alt="" />
        //         <div class="rss-wrapper">
        //             <h3>{item.title}</h3>
        //         </div>
        //     </div>
        // )
    })



