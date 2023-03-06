var games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
]

function createListItem( gameArray, index ) 
{
    let li = document.createElement( 'li' ) 
    li.classList.add( 'list-item' )
    li.classList.add( 'game' + index )

    let inputDiv = document.createElement( 'div' ) 
    inputDiv.classList.add( 'list-item__input' )
    li.appendChild( inputDiv )


    let input = document.createElement( 'button' )
    input.classList.add( 'list-item__button' )
    input.type = "checkbox"
    input.name = 'game' + index 
    input.id = 'game' + index
    input.innerText = '+'
    input.click = function() { /* function */ };
    inputDiv.appendChild( input )

    let content = document.createElement( 'div' )
    content.classList.add( 'list-item__content' )
    li.appendChild( content )

    let contentTop = document.createElement( 'div' )
    contentTop.classList.add( 'list-item__content-top' )
    content.appendChild( contentTop )

    let name = document.createElement( 'p' )
    name.classList.add( 'list-item__name' )
    name.innerText = gameArray[ 'title' ]
    contentTop.appendChild( name )

    let contentBottom = document.createElement( 'div' )
    contentBottom.classList.add( 'list-item__content-bottom' )
    content.appendChild( contentBottom )

    let genre = document.createElement( 'p' )
    genre.classList.add( 'list-item__genre' )
    genre.innerText = "Genre: " + gameArray[ 'genre' ]
    contentBottom.appendChild( genre )
    
    let rating = document.createElement( 'p' )
    rating.classList.add( 'list-item__rating' )
    rating.innerText = "Rating: " + gameArray[ 'rating' ]
    contentBottom.appendChild( rating )

    let price = document.createElement( 'p' )
    price.classList.add( 'list-item__price' )
    if ( gameArray[ 'price' ] === 0 ) {
        price.innerText = "FREE"
    } else {
        price.innerText =  "$" + gameArray[ 'price' ].toString().split( "." ).join( "," )
    }
    li.appendChild( price )

    let ul = document.querySelector( '.list-items' )
    ul.appendChild( li )
}

window.addEventListener("DOMContentLoaded", (event) => {

for (const [index, game] of games.entries()) { 
    createListItem( game, index )
}

});
 