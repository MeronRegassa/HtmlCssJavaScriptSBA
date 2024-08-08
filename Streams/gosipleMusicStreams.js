

// Access the API key

document.addEventListener('DOMContentLoaded', () => {
    const streamList = document.getElementById('stream-list');
 

const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUSf-NCzjwcnXErUBW_qeFvA&key=AIzaSyBebBG1LZybOz5DNDdZMq35nwsVqRnKeUk`

 
    fetch(url)
  
        .then(res => res.json())
       
        .then(data => {
        
            data.items.forEach(stream => {
                console.log(data)
                const streamItem = document.createElement('div');
                streamItem.className = 'stream-item';
                streamItem.innerHTML = `
                    <img src="${stream.snippet.thumbnails.default.url}" alt="Stream Thumbnail">
                   <h3 style="font-family:serif;" >${stream.snippet.title}</h3> 
                     <p style="font-family:serif;">${stream.snippet.description}</p>
                    <a href="https://www.youtube.com/watch?v=${stream.snippet.resourceId.videoId}" target="_blank" style="font-family:serif;">Watch Now</a>
                `;
                streamList.appendChild(streamItem);
            });
        })
        .catch(error => {
            console.error('Error fetching YouTube data:', error);
        });
});