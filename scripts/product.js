async function detData(){
    let res = await fetch(`./data/product_data.json`)
    let data = await res.json()
    let poster = data.Face_Foundation_Cream[0].poster
    let actual_data = data.Face_Foundation_Cream;
    console.log('poster:', poster)
    console.log('data:', data.Face_Foundation_Cream)
    appendData(actual_data,poster)
}

detData()

let appendData = (data,poster) => {
    let container = document.getElementById('container');
    let poster_div = document.createElement('div');
    poster_div.id = 'poster_div';
    let image = document.createElement('img');
    image.src = poster;
    let outer_div = document.createElement('div');
    outer_div.id = 'outer_div';
    let side_nav = document.createElement('div');
    side_nav.id = 'side_nav';
    let data_div = document.createElement('div');
    data_div.id = 'data_div';
    let small_div = document.createElement('div');
    small_div.className = 'small_div';
    let little_poster = document.createElement('img');
    little_poster.className = 'little_poster';
    little_poster.src = 'https://logan.nnnow.com/content/dam/nnnow-project/22-april-2020/tom-ford-cat2/13APR20_SKINCARE_CB_STRIP1_DESK_1.jpg';
    small_div.append(little_poster)
    
    let big_div = document.createElement('div');
    big_div.className = 'big_div';
    data_div.append(small_div,big_div);

    
    
    outer_div.append(side_nav,data_div)
    poster_div.append(image)
    container.append(poster_div,outer_div)
};