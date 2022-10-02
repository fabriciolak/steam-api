
# Steam API

Api for developers to use information from steam games creatively




## Environment Variables

To run this project, you will need to add the following environment variables to your .env

`STEAM_KEY`
## Getting an API Key

Once signed into Steam, head over to http://steamcommunity.com/dev/apikey to generate an API key.
## API Documentation

## Featured

```http
  GET /featured?cc={region}
```

| Parameter   | Type       | Values | Description                           |
| :---------- | :--------- | :--- |:---------------------------------- |
| `region` | `string` | br |**Currency Code**: You can change currency code by adding the parameter cc. |


**region:** us, es, de, fr, ru, nz, au, uk, br \

#### return featured games on the steam store

## Featured Categories
```http
  GET /featuredcategories?cc={region}&l={language}
```

| Parameter   | Type       | Values | Description                           |
| :---------- | :--------- | :--- |:---------------------------------- |
| `region` | `string` | br |**Currency Code**: You can change currency code by adding the parameter cc. |
| `language` | `string` |  portuguese |language can be changed using the parameter l. |


**region:** us, es, de, fr, ru, nz, au, uk, br \
**language:** You can use any language fromthese respective places. default it is portuguese

#### return featured categories on the steam store.

## Games
```http
  GET /game/{appId}?cc={region}&l={language}
```

| Parameter   | Type       | Values | Description                           |
| :---------- | :--------- | :--- |:---------------------------------- |
| `appId` | `number` | Steam id | Go to the game's store page and check the URL. The last number in the URL is the application ID. In this example https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/, 271590 is the id for Grand Theft Auto V. |
| `region` | `string` | br |**Currency Code**: You can change currency code by adding the parameter cc. |
| `language` | `string` |  portuguese |language can be changed using the parameter l. |


**region:** us, es, de, fr, ru, nz, au, uk, br \
**language:** You can use any language fromthese respective places. default it is portuguese

#### return details for app id. Requests for this endpoint are limited to 200 every 5 minutes


## Games News
```http
  GET /news/{appId}
```

| Parameter   | Type       | Values | Description                           |
| :---------- | :--------- | :--- |:---------------------------------- |
| `appId` | `number` | Steam id | Go to the game's store page and check the URL. The last number in the URL is the application ID. In this example https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/, 271590 is the id for Grand Theft Auto V. |


#### return news for app id.



