# Authentication

The authentication system is built using Next.js, Prisma, bcrypt, and JWT. It is designed to be secure and scalable.

## How it works

The authentication system is based on JWTs. When a user logs in, a JWT is generated and stored in a secure, HTTP-only cookie. This cookie is then sent with every request to the server. The server then verifies the JWT to ensure that the user is authenticated.

## Security

The authentication system is designed to be secure. It uses bcrypt to hash passwords, and it uses JWTs to authenticate users. It also uses rate limiting to prevent brute-force attacks.

## How to use it

To use the authentication system, you need to create a `.env.local` file with the following environment variables:

```
JWT_SECRET=some-super-secret-key-that-is-long-enough
SECURITY_CODE=0213
```

You also need to run the following command to create the database:

```
npx prisma migrate dev
```

Once you have done this, you can register a new user by sending a POST request to `/api/register` with the following body:

```
{
  "username": "admin",
  "password": "password",
  "securityCode": "0213"
}
```

You can then login by sending a POST request to `/api/login` with the following body:

```
{
  "username": "admin",
  "password": "password"
}
```

If the login is successful, a cookie will be set with the JWT. You can then access protected routes by sending the cookie with every request.
