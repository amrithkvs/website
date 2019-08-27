var token = "625350571.0a7a8b4.227404e650af4972800afe20d3d68581"
  , num_photos = 9;
$.ajax({
    url: "https://api.instagram.com/v1/users/self/media/recent",
    dataType: "jsonp",
    type: "GET",
    data: {
        access_token: token,
        count: num_photos
    },
    success: function(a) {
        console.log('instagram data', a)
        const { data } = a
        data.forEach(d => {
            const image = d.images.standard_resolution.url
            $('.instagram-feed').append(`<img src='${image}' class='instagram-img-container'/>`);
        })
    },
    error: function(a) {
        console.log(a)
    }
});



