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

function createItem( game, index, type ) 
{
    let li = document.createElement( 'li' ) 
    li.classList.add( type + '-item' )
    li.classList.add( 'game' + index )

    let inputDiv = document.createElement( 'div' ) 
    inputDiv.classList.add( type + '-item__input' )
    li.appendChild( inputDiv )

    let input = document.createElement( 'button' )
    input.classList.add( type + '-item__button' )
    input.type = "checkbox"
    input.name = 'game' + index 
    input.id = 'game' + index

    if ( type === 'cart' ) {
        input.innerText = '-'
        input.onclick = function() { 
            let element = document.querySelector( '.cart-items .game' + index ) 
            element.remove()
        };
    } else if ( type === 'list') {
        input.innerText = '+'
        input.onclick = function() { 
            popUp( this ) 
            createItem( game, index, 'cart' )
        };
    }
    inputDiv.appendChild( input )

    let content = document.createElement( 'div' )
    content.classList.add( type + '-item__content' )
    li.appendChild( content )

    let contentTop = document.createElement( 'div' )
    contentTop.classList.add( type + '-item__content-top' )
    content.appendChild( contentTop )

    let name = document.createElement( 'p' )
    name.classList.add( type + '-item__name' )
    name.innerText = game[ 'title' ]
    contentTop.appendChild( name )

    let contentBottom = document.createElement( 'div' )
    contentBottom.classList.add( type + '-item__content-bottom' )
    content.appendChild( contentBottom )

    let genre = document.createElement( 'p' )
    genre.classList.add( type + '-item__genre' )
    genre.innerText = "Genre: " + game[ 'genre' ]
    contentBottom.appendChild( genre )
    
    let rating = document.createElement( 'p' )
    rating.classList.add( type + '-item__rating' )
    rating.innerText = "Rating: " + game[ 'rating' ]
    contentBottom.appendChild( rating )

    let price = document.createElement( 'p' )
    price.classList.add( type + '-item__price' )
    if ( game[ 'price' ] === 0 ) {
        price.innerText = "FREE"
    } else {
        price.innerText =  "$" + game[ 'price' ].toString().split( "." ).join( "," )
    }
    li.appendChild( price )

    let popup = document.createElement( 'div' )
    popup.classList.add( 'popUp' )
    let popUpText = document.createElement( 'p' )
    popUpText.innerText = "Item has been added to your cart"
    //popup.style.display = 'none'
    popup.style.opacity = '0'
    popup.appendChild( popUpText )
    inputDiv.appendChild( popup )

    let ul = document.querySelector( '.' + type + '-items' )
    ul.appendChild( li )
}
function popUp( element ) 
{
    let popUp = element.parentElement.querySelector( '.popUp' )
    popUp.style.opacity = '1'

    setTimeout(
        function() {
            popUp.style.opacity = '0'
        }, 2000);
}

function calculate() 
{
    let cartItems = document.querySelectorAll( '.cart-items .cart-item' )
    
    if ( cartItems.length !== 0 ) {
        let totalPrice = 0
        for ( const item of cartItems ) {
            let price = item.querySelector( '.cart-item__price' ).innerText
            if ( price === "FREE" ) {
                price = "$0,00"
            }
            totalPrice += parseFloat( price.split( '$' )[1].split( ',' ).join( '.' ) )
        }
        totalPriceButton = document.getElementById( 'total-button' )
        totalPriceButton.innerText = "Total: $" + totalPrice.toFixed(2)
    }
    hideAndShow()
}

function clearCart() 
{
    let cartItems = document.querySelector( '.cart-items' )
    if ( cartItems != null) {
    
        let delChild = cartItems.lastChild;
        while (delChild) {
            cartItems.removeChild(delChild);
            delChild = cartItems.lastChild;
        }
        totalPriceButton = document.getElementById( 'total-button' )
        totalPriceButton.innerText = "Total: $0"
    }
}

function hideAndShow()
{
    let headerCart = document.querySelector( '.header__cart' )
    let headerOverview = document.querySelector( '.header__overview' )

    let containerCart = document.querySelector( '.container__cart' )
    let containerOverview = document.querySelector( '.container__overview' )

    if ( headerCart.style.display == 'none' ) {
        headerCart.style.display = 'flex'
        containerCart.style.display = 'block'
        headerOverview.style.display = 'none'
        containerOverview.style.display = 'none'
    } else {
        headerCart.style.display = 'none'
        containerCart.style.display = 'none'
        headerOverview.style.display = 'flex'
        containerOverview.style.display = 'block'
    }
}

window.addEventListener("DOMContentLoaded", (event) => {

document.querySelector( '.header__cart' ).style.display = 'none'
document.querySelector( '.container__cart' ).style.display = 'none'

for (const [index, game] of games.entries()) { 
    createItem( game, index, 'list' )
}

});
 