import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key"); 
    //Change "my-limit-key" with userId/auth so it doesn't block the whole app if one person hits the rate limit

    if (!success) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }

    return next();
  } catch (err) {
    console.log("Rate limit error", err);
    return next(err);
  }
};

export default rateLimiter;