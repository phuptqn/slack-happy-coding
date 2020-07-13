export default (req, res, next) => {
  req.body = req.body.payload ? JSON.parse(req.body.payload) : req.body;
  
  if (req.body.token === process.env.SLACK_VERIFICATION_TOKEN) {
    next();
  } else {
    res.sendStatus(401);
  }
}