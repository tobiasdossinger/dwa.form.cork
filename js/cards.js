let album = [


    { cover: "../album/1.jpg", title: "Halloziehnation", year: 2006, releaseDate: "7. Juli 2006", alterego: "Marsimoto", spotify_link: "https://open.spotify.com/album/6H4yqs7vP9kW1Vlk0hU9UW?si=jZD41AolRU-M3jJCzlLG6g", buy_link: "https://www.amazon.de/Halloziehnation-Marsimoto/dp/B000G2Y648", order: 1 },

    { cover: "../album/2.jpg", title: "Base Ventura", year: 2007, releaseDate: "28. September 2007", alterego: "Marteria", spotify_link: "https://open.spotify.com/album/6pcbybzdyvsfBddF8xAHJM?si=vZM3PC77Rei1sP6VFvJ7Hg", buy_link: "https://www.amazon.de/Base-Ventura-Marteria/dp/B000VLZY40", order: 2 },

    { cover: "../album/3.jpg", title: "Zu zweit allein", year: 2008, releaseDate: "17. Oktober 2008", alterego: "Marsimoto", spotify_link: "https://open.spotify.com/album/31RgWLHgm3JQhhaUkcrNCI?si=ftPqSXB0TcK4ub-BGlzgGA", buy_link: "https://www.amazon.de/Zu-Zweit-Allein-Marsimoto/dp/B001ET21PI", order: 3 },

    { cover: "../album/Zum Glück in die Zukunft I..jpg", title: "Zum Glück in die Zukunft", year: 2010, releaseDate: "20. August 2010", alterego: "Marteria", spotify_link: "https://open.spotify.com/album/6dJll3j2Ai1hfOkH866Qf5?si=vGvnVB26SEC7pUrZioOCMA", buy_link: "https://www.amazon.de/Zum-Gl%C3%BCck-die-Zukunft-Marteria/dp/B003Z5BS44", order: 4 },

    { cover: "../album/Gruner-Samt-cover.jpg", title: "Grüner Samt", year: 2012, releaseDate: "13. Januar 2012", alterego: "Marsimoto", spotify_link: "https://open.spotify.com/album/0yQ8kW4l6Qoul9mDEFqq4G?si=2V37Q7l6Q1Cb3ELQUoekfA", buy_link: "https://www.amazon.de/Gr%C3%BCner-Samt-Marsimoto/dp/B006G8C2M4", order: 5 },

    { cover: "../album/Zum Glück in die Zukunft II..jpg", title: "Zum Glück in die Zukunft II", year: 2014, releaseDate: "31. Januar 2014", alterego: "Marteria", spotify_link: "https://open.spotify.com/album/6Ttnb4f8aPy7ytDJqV10FT?si=0XgotkEWThGn6RG07pRqZw", buy_link: "https://www.amazon.de/Zum-Gl%C3%BCck-die-Zukunft-II/dp/B00I9NJI2Q", order: 6 },

    { cover: "../album/Ring der Nebelungen.jpg", title: "Ring der Nebelungen", year: 2015, releaseDate: "13. Januar 2015", alterego: "Marsimoto", spotify_link: "https://open.spotify.com/album/1RaE3epiDK16XkB0uchhKH?si=BuWiDFglT7e7Pt1Dhrtj5A", buy_link: "https://www.amazon.de/Ring-Nebelungen-Marsimoto/dp/B00V7BINTG", order: 7 },

    { cover: "../album/Roswell.jpg", title: "Roswell", year: 2017, releaseDate: "26. Mai 2017", alterego: "Marteria", spotify_link: "https://open.spotify.com/album/0dHuY9zp8fjszsCS91oHRU?si=gngYutoYRKaQ1h8APcC7sQ", buy_link: "https://www.amazon.de/Roswell-Limited-Digipack-Marteria/dp/B06XPVML81", order: 8 },

    { cover: "../album/Verde.jpg", title: "Verde", year: 2018, releaseDate: "27. April 2018", alterego: "Marsimoto", spotify_link: "https://open.spotify.com/album/2J6H1m2v7IaQU7xVDqTqoy?si=rIFKhc-uTNS0PQw5gI3Hdw", buy_link: "https://www.amazon.de/VERDE-Digipack-Marsimoto/dp/B07CB8TJ1K", order: 9 },

    { cover: "../album/1982-cover.jpg", title: "1982", year: 2018, releaseDate: "31. August 2018", alterego: "Marteria", spotify_link: "https://open.spotify.com/album/7zyeXBemQOEAiDWjeaFvcI?si=3I-GyE-_Tdm64c7FDhzNmQ", buy_link: "https://www.amazon.de/1982-Limited-Digipack-Marteria-Casper/dp/B07F2CT816", order: 10 },


]

//let heart = '<i class="fas fa-heart"></i>';

console.log(album[1].title);

const createAlbumTable = (arr) => {
    html = "";

    for (let i = 0; i < arr.length; i++) {
       
        html += '<div id=\"cards\" class=\"container\">\n';
        html += '<div class=\"docs-demo columns\">\n';
        html += '<div class=\"column col-xs-12\">\n';
        html += '<div class=\"card\">\n';
        html += '<div class=\"card-header\">\n';
        html += '<div class=\"card-title h5\">' + arr[i].title + '</div>\n';
        html += '<div class=\"card-subtitle text-gray\">'+ arr[i].year + ' - '+ arr[i].alterego + '</div>\n';
        html += '</div>\n';
        html += '<div class=\"class-image\">\n  ';
        html += '<img class=\"img-responsive\" src=\"./' + arr[i].cover + '\" alt=\"'+ arr[i].title + '\">\n';
        html += '</div>\n';
        html += '<div class=\"class-body\">Release: ' + arr[i].releaseDate +'</div>\n';
        html += '<div class=\"card-footer\">\n';
        html += '<div class=\"btn-group  block\">\n';
        html += '<a class="fab fa-spotify" href=\"'+ arr[i].spotify_link +'" target="_blank" ></a>';
        html += '<a class="fab fa-amazon" href=\"'+ arr[i].buy_link +'" target="_blank"></a>\n';
        // html += '<div class="form-group">'
        html += '<label class="form-checkbox">'
        // html += '<input type="checkbox">'
        html += '<input type="radio" name="favorite" value="'+ arr[i].title +'">'
        html += '<i class="form-icon"></i>Select'
        html += '</label>'
        html += '</div>';
        // html += '</div>\n';
        html += '</div>\n';
        html += '</div>\n';
        html += '</div>\n';
        html += '</div>\n';
        html += '</div>';


    }

    return html;
}

const createHeartTable = () => {
        heartTable = "";

    for (let i = 0; i < 5; i++) {
        heartTable += '<input class="hearts" type="radio" id="heart'+ (5-i) +'" name="rating" value="'+ (5-i) +'" /><label class="fas fa-record-vinyl heart-label" for="heart'+ (5-i) +'"></label>'
       
    }
    return heartTable;
}



const init = () => {

    document.getElementById('album').innerHTML = createAlbumTable(album);
    document.getElementById('heart').innerHTML = createHeartTable(heart);
    
    
}

window.addEventListener('load', init);




