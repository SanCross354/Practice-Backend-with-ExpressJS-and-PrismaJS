# User API Spec

## Register User API
Endpoint : POST /api/users

Request Body :

```json
{
    "username": "pzn",
    "password": "rahasia",
    "name": "Practice of creating NodeJS RESTful API V1"
}
```

Response Body Success :
```json
{
    "data": {
        "username": "pzn",
        "name": "Practice of creating NodeJS RESTful API V1"
    }
}
```

Response Body Error : 
```json
{
    "error": "Username already registered"
}
```

## Login User API
Endpoint : POST /api/users/login

Request Body :

```json
{
    "username": "pzn",
    "password": "rahasia"
}
```

Response Body Success :
```json
{
    "data": {
        "token": "unique-token"
    }
}
```

Response Body Error : 
```json
{
    "error": "Username or password wrong"
}
```

## Update User API
Note : 
> Using ``PATCH`` for updating partial data and use ``PUT`` for updating the whole data. Because the data consist of three properties (name, username, and password) and the username can't be updated, so we can only update 2 properties (name and password). So the proper method verb is ``PATCH``.

Endpoint : PATCH /api/users/current

Note :
> After update the personal data, they must login again

Headers :
- Authorization : token

Request Body :

```json
{
    "name": "Practice of creating NodeJS RESTful API V2", //optional
    "password": "new password" //optional
}
```

Response Body Success :
```json
{
    "data": {
        "username": "pzn",
        "name": "Practice of creating NodeJS RESTful API V2"
    }
}
```

Response Body Error : 
```json
{
    "error": "Name length max 100"
}
```

## Get User API
Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data": {
        "username": "pzn",
        "name": "Practice of creating NodeJS RESTful API V2"
    }
}
```

Response Body Error : 
```json
{
    "error": "Unauthorized"
}
```

## Logout User API
Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data": "OK"
}
```

Response Body Error : 
```json
{
    "error": "Unauthorized"
}
```