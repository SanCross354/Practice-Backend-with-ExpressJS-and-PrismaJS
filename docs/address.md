# Address API Spec

## Create Address API
Endpoint : POST api/contacts/:contactId/addressess

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "Jalan Kenangan",
    "city" : "Gotham",
    "province" : "Hanyang",
    "country" : "Indo",
    "postal_code" : "55340"
}
```

Response Body Success :
```json
{
    "data": {
        "id" : 1,
        "street" : "Jalan Kenangan",
        "city" : "Gotham",
        "province" : "Hanyang",
        "country" : "Indo",
        "postal_code" : "55340"
    }
}
```

Response Body Error : 
```json
{
    "error": "Country is required"
}
```

## Update Address API
Endpoint : PUT api/contacts/:contactId/addressess/:addressId

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "Jalan Kenangan",
    "city" : "Gotham",
    "province" : "Hanyang",
    "country" : "Indo",
    "postal_code" : "55340"
}
```

Response Body Success :
```json
{
    "data": {
        "id" : 1,
        "street" : "Jalan Kenangan",
        "city" : "Gotham",
        "province" : "Hanyang",
        "country" : "Indo",
        "postal_code" : "55340"
    }
}
```

Response Body Error : 
```json
{
    "error": "Country is required"
}
```

## Get Address API
Endpoint : GET api/contacts/:contactId/addressess/:addressId

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data": {
        "id" : 1,
        "street" : "Jalan Kenangan",
        "city" : "Gotham",
        "province" : "Hanyang",
        "country" : "Indo",
        "postal_code" : "55340"
    }
}
```

Response Body Error : 
```json
{
    "error": "Contact is not found"
}
```

## List Address API
Endpoint : GET api/contacts/:contactId/addressess

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data": [
     {
        "id" : 1,
        "street" : "Jalan Kenangan",
        "city" : "Gotham",
        "province" : "Hanyang",
        "country" : "Indo",
        "postal_code" : "55340"
     },
     {
        "id" : 2,
        "street" : "Jalan Kenongo",
        "city" : "Ohio",
        "province" : "Ponorogo",
        "country" : "Harlem",
        "postal_code" : "54340"
     }
    ]
}
```

Response Body Error : 
```json
{
    "error": "Contact is not found"
}
```

## Remove Address API
Endpoint : DELETE api/contacts/:contactId/addressess/:addressId

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
    "error": "Address is not found"
}
```