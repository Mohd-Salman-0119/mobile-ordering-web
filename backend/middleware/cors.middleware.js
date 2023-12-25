

const allowedOrigins = ['http://127.0.0.1:5173', 'https://aggressive-foal-trunks.cyclic.app', 'http://localhost:8080', 'https://mobile-ordering-app-beta.vercel.app'];

// CORS middleware with origin check function
const corsOptions = {
     origin: function (origin, callback) {
          if (!origin || allowedOrigins.includes(origin)) {
               callback(null, true);
          } else {
               callback(new Error('Not allowed by CORS'));
          }
     },
     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
     credentials: true,
};

module.exports = { corsOptions }