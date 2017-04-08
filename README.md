<p align="center">
  <img src="https://github.com/lnmunhoz/food-recommendation-bot/raw/master/assets/messenger_code.png">
</p>

<h1 align="center">Food Recommendation Bot</h1>

<p align="center">
  Shows you open restaurants around based on Google Places API.
</p>

<p align="center">
  <a href='https://coveralls.io/github/lnmunhoz/food-recommendation-bot?branch=master'><img src='https://coveralls.io/repos/github/lnmunhoz/food-recommendation-bot/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

## Live demo
Scan the messenger code above or [click here](https://www.messenger.com/t/food.recommentation.bot).

## About
The purpose of this project is to create a more real world example bot to help the community. It was built
with:
- [Claudiajs](http://claudiajs) to manage AWS Lambda Functions
- [API.AI](http://api.ai) to parse messages and transform in actions
- [claudia-bot-builder](https://github.com/claudiajs/claudia-bot-builder) to integrate with facebook messenger
- [Google Places API](https://developers.google.com/places) to search places around you based on location


## Running tests
Create a `.env` file on `tests/config` folder with the following environment variables:

```
APIAI_ACCESS_TOKEN="YOUR_ACCESS_TOKEN_HERE"
GOOGLE_PLACES_KEY="YOUR_KEY_HERE"
```

Then run `npm test`.
