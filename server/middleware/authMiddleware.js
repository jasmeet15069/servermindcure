const { admin } = require("firebase-admin");

// Initialize Firebase admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const protect = async (req, res, next) => {
  try {
    // Get the `accessToken` from the `req` object
    const accessToken = req.headers.authorization.split(" ")[1];

    // Verify the `accessToken` with Firebase
    const decodedToken = await admin.auth().verifyIdToken(accessToken);

    // Add the user object to the `req` object for use in the next middleware function or route handler
    req.user = decodedToken;

    // Call the next middleware function or route handler
    next();
  } catch (error) {
    // If there was an error, send a 401 Unauthorized response
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { protect };