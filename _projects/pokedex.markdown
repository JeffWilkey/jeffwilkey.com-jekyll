---
title: Pokedex
date: 2019-09-05 12:34:00 -07:00
categories:
- React App
position: 0
excerpt: A web application built on React utilizing the PokemonTCG API as a backend
  the Pokemon NPM package to fetch Pokemon names.
hero: An awesome web application built on React utilizing the PokemonTCG API as a
  backend. Search a Pokemon and get check out every single related card and its stats.
featured_image: "/uploads/FireShot%20Capture%20013%20-%20Pokedex%20-%20serene-harbor-16803.herokuapp.com.png"
live_site_url: https://serene-harbor-16803.herokuapp.com
github_repo_url: https://www.github.com/jeffwilkey/pokedex-react
---

![Pokedex Screenshot](/uploads/FireShot%20Capture%20013%20-%20Pokedex%20-%20serene-harbor-16803.herokuapp.com.png)

## About

A web application built on React utilizing the [PokemonTCG API](https://pokemontcg.io) as a backend the [Pokemon NPM package](https://www.npmjs.com/package/pokemon) to fetch Pokemon names since the TCG API makes that task a bit more difficult than it needs to be. For the MVP ([which I wrote an article about here](https://dev.to/jeffwilkey/creating-a-simple-pokemon-card-displayer-in-react-3l78)) you could only search the 150 original Pokemon and **1** associated card from the base series. Now, through a few iterations, I added the ability to search any Pokemon and flip through every single related card that's available from the Pokemon TCG API.

The app utilizes [React-Select](https://react-select.com) for a dynamic search field which updates results returned from the Pokemon API as the value of the input field is changed. (*Shown in the figure below*).

![React-Select Searchable Select Field](/uploads/peuy4y8u56fbl5si1axl.png)

## Components

Overall there are 4 separate React components at work.

### Component Hierarchy

* Pokedex.js
  * PokemonCard.js
  * PokemonInfo.js
* Search.js

`Pokedex.js` manages most of the application's state:

``` javascript
this.state = {
  selected: null,
  cards: [],
  startIndex: Math.floor(Math.random() * Math.floor(options.length)),
  selectedCardIndex: 0
};
```

`selected` stores the `name` value of the currently selected Pokemon and makes sure that an unnecessary API call isn't made if the Pokemon is re-selected.

`cards` stores an array of card data that the PokemonTCG SDK returns for the currently selected Pokemon.

`startIndex` responsible for choosing a random Pokemon returned from the Pokemon NPM package.

`selectedCardIndex` is used to track the current position in the `cards` array. Incrementing or decrementing the value moves us to the next or previous card which will contain different art and attributes.

### Little Things
One last thing worth mentioning: I enjoy adding little quirks to sites & apps that I work on. I think little touches like the animation shown below help the site feel more alive and welcoming.

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="css,result" data-user="jeffwilkey" data-slug-hash="qBWPjKm" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Bouncing Pokeball">
  <span>See the Pen <a href="https://codepen.io/jeffwilkey/pen/qBWPjKm/">
  Bouncing Pokeball</a> by Jeff Wilkey (<a href="https://codepen.io/jeffwilkey">@jeffwilkey</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>