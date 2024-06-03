import passport from "passport";
export const jwtClientAuth =   function(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(403).json({ message: 'Forbidden: Access is denied' });
      }
      req.user = user;
      next();
    })(req, res, next);
}
export const jwtSuperAdminAuth =   function(req, res, next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(403).json({ message: 'Forbidden: Access is denied' });
      }
      // req.user = user;
      next();
    })(req, res, next);
}