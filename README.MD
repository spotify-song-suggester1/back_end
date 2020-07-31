# Spotify Song Suggester Back-end API Information

# API: https://spotifysongsuggester.herokuapp.com/

## REGISTER AND LOGIN
Type | Endpoint | What it does | Required
-----|--------------------|----------------------|-------------------------------------------------
POST | /api/register | registers a user     | requires a __username__ and password  favorite genre is optional
POST | /api/login    | logs a user in       | requires a __username__ and __password__ returns an authorized token.  

#### The following endpoints will be behind the restricted middleware once authorized the following information will be accessible

## USERS
Type | Endpoint | What it does | Required
------------|--------------------------------|----------------------------------------------|--------------------------------
GET         | /api/users                     | returns a list of all users                  |  
GET         | /api/genres                     | returns a list of all genres                  | 