import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // Create the token using the user's ID and your secret key
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token remains valid for 7 days
  });

  // Set the token as a cookie in the response
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiry in milliseconds (7 days)
    httpOnly: true, // Prevents XSS attacks (cookie not accessible via JS)
    sameSite: "strict", // Prevents CSRF attacks
    secure: process.env.NODE_ENV !== "development", // Only uses HTTPS in production
  });

  return token;
};