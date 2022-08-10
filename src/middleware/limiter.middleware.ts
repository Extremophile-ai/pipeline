import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 1 * 1000, // 1 second in milliseconds
  max: 3,
  message: "You have exceeded 3 api calls in 1 second limit!", 
  standardHeaders: true,
  legacyHeaders: false,
});