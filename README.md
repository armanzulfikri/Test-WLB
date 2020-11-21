# Test WLB-backed tests
# Arman Zulfikri Fardinasyah
# DOCUMENT API


## POST ((URL))/users/register : 
Register User
```json
Request Header : not needed
```
```json
Request Body: {
  "full_name": "<user name>",
  "email": "<user email>",
  "password": "<user password>"
}
```
```json
Response: (201 - Created){
    "profile_image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
    "_id": "5fb92ad61a04241e0012ed98",
    "full_name": "arman",
    "email": "armanzulfikri@gmail.com",
    "password": "$2b$10$7qI6CLgfHjgeWza1FyIKzeYimNphzQ3aD5zrs3DOTjmubt1wbRTGy",
    "createdAt": "2020-11-21T14:57:27.098Z",
    "updatedAt": "2020-11-21T14:57:27.098Z"
}
```
Response: (400 - Internal Server Error){
  "<Error Message>"
}
```
```

## POST ((URL))/users/login : 
Register User
```json
Request Header : {}
```
```json
Request Body: {
  "email": "<user email>",
  "password": "<user password>"
}
```
```json
Response: (201 - Created){
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFybWFuenVsZmlrcmlAZ21haWwuY29tIiwiX2lkIjoiNWZiOTJhZDYxYTA0MjQxZTAwMTJlZDk4IiwiaWF0IjoxNjA1OTcxMTIwfQ.i0jegviJXI8WEZeGUaEBcdQW8DxP3McG64Di-9aPNGk"
}
```
Response: (400 - Internal Server Error){
  "<Error Message>"
}
```
```
## GET ((URL))/users/list : 
Register User
```json
Request Header : not needed
```
```json
Request Body: {not needed}
```
```json
Response: (200){
    "profile_image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
    "_id": "5fb92ad61a04241e0012ed98",
    "full_name": "arman",
    "email": "armanzulfikri@gmail.com",
    "password": "$2b$10$7qI6CLgfHjgeWza1FyIKzeYimNphzQ3aD5zrs3DOTjmubt1wbRTGy",
    "createdAt": "2020-11-21T14:57:27.098Z",
    "updatedAt": "2020-11-21T14:57:27.098Z"
}

```
Response: (400 - Internal Server Error){
  "<Error Message>"
}
```
```
## GET ((URL))/users/detail : 
Register User
```json
Request Header : {<token>}
```
```json
Request Body: {not needed}
```
```json
Response: (200){
    "profile_image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
    "_id": "5fb92ad61a04241e0012ed98",
    "full_name": "arman",
    "email": "armanzulfikri@gmail.com",
    "password": "$2b$10$7qI6CLgfHjgeWza1FyIKzeYimNphzQ3aD5zrs3DOTjmubt1wbRTGy",
    "createdAt": "2020-11-21T14:57:27.098Z",
    "updatedAt": "2020-11-21T14:57:27.098Z"
}

```
Response: (400 - Internal Server Error){
  "<Error Message>"
}
```
```
## GET ((URL))/users/edit: : 
Register User
```json
Request Header : {<token>}
```
```json
Request Body: {
    "full_name":"<your full name>",
    "email":"<your full email>",
    "profile_image":"<your full profile_image>",
    
}
```
```json
Response: (200){
    "profile_image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
    "_id": "5fb92ad61a04241e0012ed98",
    "full_name": "arman",
    "email": "armanzulfikri@gmail.com",
    "password": "$2b$10$7qI6CLgfHjgeWza1FyIKzeYimNphzQ3aD5zrs3DOTjmubt1wbRTGy",
    "createdAt": "2020-11-21T14:57:27.098Z",
    "updatedAt": "2020-11-21T14:57:27.098Z"
}

```
Response: (400 - Internal Server Error){
  "<Error Message>"
}
```
```
## GET ((URL))/users/delete:user_id : 
Register User
```json
Request Header : {<token>}
```
```json
Request Body: {
```
```json
Response: (200){
    "profile_image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
    "_id": "5fb92ad61a04241e0012ed98",
    "full_name": "arman",
    "email": "armanzulfikri@gmail.com",
    "password": "$2b$10$7qI6CLgfHjgeWza1FyIKzeYimNphzQ3aD5zrs3DOTjmubt1wbRTGy",
    "createdAt": "2020-11-21T14:57:27.098Z",
    "updatedAt": "2020-11-21T14:57:27.098Z"
}

```
Response: (400 - Internal Server Error){
  "<Error Message>"
}
```
```
## GET ((URL))/posting/all : 
```
```
## POST ((URL))/posting/create : 
```
```
## DELETE ((URL))/posting/delete/:posting_id : 
```
```
## PUT ((URL))/posting/edit/:posting_id: 
```
```
## GET ((URL))/posting/:posting_id : 
```
```
## POST ((URL))/reply/user/create/:posting_id : 
```
```
## PUT ((URL))/reply/user/edit/:reply_id :
```
```
## DELETE ((URL))/reply/user/delete/:reply_id :
```
```
## GET ((URL))/reply/all :
```
```
## GET ((URL))/reply/user/:reply_id :