I used postman to test the endpoints.<BR/>
I also added 22 mock profiles found in users.json.<BR/>
<BR/>
**EXAMPLE:**<BR/>
    "id": 22,<BR/>
    "username": "user22",<BR/>
    "email": "user22@example.com",<BR/>
    "password": "user22"<BR/>
<BR/>
**Here are the URL end points:**<BR/>
POST - http://localhost:3000/api/login<BR/>
POST - http://localhost:3000/api/register<BR/>
GET - http://localhost:3000/api/profile<BR/>
<BR/>
**1. REGISTER BODY FORMAT [in body]**<BR/>
{<BR/>
  "username": "username here",<BR/>
  "email": "email here",<BR/>
  "password": "password here"<BR/>
}<BR/>
<BR/>
**2. LOGIN FORMAT [in body]**<BR/>
{<BR/>
  "email": "email here",<BR/>
  "password": "password here"<BR/>
}<BR/>
<BR/>
_OUTPUT:_<BR/>
{<BR/>
    "message": "Login successful",<BR/>
    "token": "token here"<BR/>
}<BR/>
<BR/>
**3. PROFILE FORMAT [in headers]**<BR/>
KEY: Authorization<BR/>
VALUE: Bearer <token provided from logging in><BR/>
