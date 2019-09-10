---
title: "#100DaysOfCode Day 1 Reflection: Challenge Accepted"
date: 2019-09-10 04:54:00 Z
categories:
- frontend
- education
tags:
- 100DaysOfCode
- React
- Codepen
featured_image: 100daysofcode.png
hero: Read about starting the 100DaysOfCode Challenge as well as completing the Codepen
  "Think Small" challenge for the first week of September. Also my adventures in building
  a Pokemon Trading Card App on React.
---

## Hitting the ground running

On day 1, I commited to the [#100DaysOfCode challenge](https://www.100daysofcode.com) publicly on Twitter and worked on both the [Think Small Codepen Challenge](codepen.io/challenges/2019/september/1) and the React app I've been playing with which utilizes the [PokemonTCG API](https://pokemontcg.io/). I'll be talking about my experience with all of this below as well as listing what I gained from the experience of working on them.

## The 100x50 Codepen Challenge

This month's Codepen Challenge theme is [Limitations](codepen.io/challenges/2019/september/) and the first challenge was called [Think Small](https://codepen.io/challenges/2019/september/1):

> We begin this month of rather extreme design limitations by challenging you to design something very small. You only have 100x50 pixels to work with! Anything you design has to fit inside that rectangle (unless you'd prefer to interpret these 5,000 pixels some other way). What could this Lego brick-sized space contain? A button? A freaky design? An entire interactive world? -[codepen.io](http://codepen.io)

I had trouble coming up with an idea at first, I started out making some little mountains and a night sky with CSS and was going to put together a little outdoor scene. But alas, I wasn't having any fun with it which meant it was time to scrap that idea and move on. I'd been on kind of a space kick and had built a little interactive Solar System with HTML, CSS and jQuery earlier in the week and decided to continue in that vein with a tour of the solar system animation. I managed to figure out that I had as much canvas as I wanted on the left or right of the 100x50 pixel space. I'd just have to animate the canvas to slide across the display area so that's what I did using the animation keyframes below.

```css
    @keyframes slide {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-615px, 0); }
    }
```

Basically I had a 650px wide canvas with a height that matched the display area and then used the slide animation to display the each planet of the solar system. Then finally when I had all of the planets in place(except Pluto) something still felt missing. So after toying around with some different little ideas I decided to add the last "Pluto was here" bit and that completed the challenge for me. Check it out below.

<p class="codepen" data-height="341" data-theme-id="37747" data-default-tab="css,result" data-user="jeffwilkey" data-slug-hash="jONaMBE" style="height: 341px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="100x50  Tour of the Solar System">
  <span>See the Pen <a href="https://codepen.io/jeffwilkey/pen/jONaMBE/">
  100x50  Tour of the Solar System</a> by Jeff Wilkey (<a href="https://codepen.io/jeffwilkey">@jeffwilkey</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Skills Practiced:

- Creativity and having fun
- CSS Animation, Shapes & Art Creation
- Fun with HTML and `position: absolute;`

## Pokemon React App

![FireShot Capture 013 - Pokedex - serene-harbor-16803.herokuapp.com.png](/uploads/FireShot%20Capture%20013%20-%20Pokedex%20-%20serene-harbor-16803.herokuapp.com.png)

I originally started the Pokemon app with a hunger for nostalgia and the intention of writing an article about it on [dev.to](https://dev.to) which you can [read here](https://dev.to/jeffwilkey/creating-a-simple-pokemon-card-displayer-in-react-3l78). Basically the article covers building a very sketchy MVP, with only 150 Searchable Pokemon that are all hard-coded and also only displays a single card from the Pokemon base series. So after the end of that article is kind of where this one begins.

### Goals

- Make all Pokemon searchable by utilizing either the [PokemonTCG API](https://pokemontcg.io) or another similar package and funneling the results into my React-Select component (ended up going with the [Pokemon NPM Package](https://www.npmjs.com/package/pokemon)).
- Allow user to flip through multiple versions of cards which are already being pulled from the PokemonTCG API SDK.

Achieving goal 1 was simple. After installing the Pokemon NPM package the code where the list of Pokemon is pulled went from this:

```javascript
const Pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
export default Pokemon.map(p => ({
  value: p.toLowerCase(),
  label: p
}));
```

to the much cleaner and more data-rich:

```javascript
import pokemon from 'pokemon';

export default pokemon.all().map(p => ({
  value: p.toLowerCase(),
  label: p
}));
```

Then approaching goal 2 was also pretty simple with the code that was already in place. It was a simple as adding a selectedCardIndex field to the application's state as well as an increment function that handles incrementing the index. In the end, the changes in Pokedex.js file look like this:

```javascript
import React, { Component } from 'react';
import pokemon from 'pokemontcgsdk';
import options from '../utils/pokemonOptions';
import Search from './Search';
import PokemonCard from './PokemonCard';
import PokemonCardInfo from './PokemonCardInfo';
import './Pokedex.scss';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      cards: [],
      startIndex: Math.floor(Math.random() * Math.floor(options.length)),
      selectedCardIndex: 0
    };
  }

  componentDidMount = () => {
    this.handleChange(options[this.state.startIndex]);
  };

  handleChange = e => {
    if (this.state.selected !== e.value) {
      pokemon.card.where({ name: e.value }).then(cards => {
        cards = cards.filter(card => card.name === e.label);
        console.log(cards);
        this.setState({
          selected: e.value,
          cards
        });
      });
    }
  };

  handleCardIndexIncrement = (isIncrement) => {
    if (isIncrement) {
      this.setState({
        selectedCardIndex: this.state.selectedCardIndex + 1
      });
    } else {
      this.setState({
        selectedCardIndex: this.state.selectedCardIndex - 1
      });
    }
  }

  render() {
    const { cards, selectedCardIndex } = this.state;
    return (
      <div className="Pokedex">
        <img className="logo bounce" src="pokeball.png" alt="pokeball" />
        <h1>Pokedex</h1>
        <div className="card">
          <h2 className="card-search-header">Search</h2>
          <Search
            onChange={this.handleChange}
            defaultValue={options[this.state.startIndex]}
          />
          <div className="card-row">
            <div className="card-col-1">
              <h2>Card(s)</h2>
              <div className="card-container">
                <PokemonCard
                  selectedCard={cards[selectedCardIndex]}
                  handleIncrement={this.handleCardIndexIncrement}
                  currentIndex={this.state.selectedCardIndex}
                  isMaxLength={this.state.cards.length - 1 === selectedCardIndex}
                />
              </div>
            </div>
            <div className="card-col-1">
              <PokemonCardInfo selectedCard={cards[selectedCardIndex]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
```

All in all I was happy with what was accomplished on Day 1. My 100x50 Challenge Submission was later retweeted and added to Picked Pens by CodePen and the Pokemon app turned out really cool. I will be posting an end-to-end tutorial for building that same app in the future but for now you're welcome to look at the [GitHub repo](https://www.github.com/jeffwilkey/pokedex-react) here or [see it Live](https://serene-harbor-16803.herokuapp.com/).



