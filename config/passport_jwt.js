import passport from 'passport';
import passportJWT from 'passport-jwt'
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
import User from "../models/User.js"

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'dailyfly2new',
    passReqToCallback: true
}

passport.use(new JWTStrategy(opts, async function (req, jwtPayload, done) {
    console.log('LOG : Passing through passport Jwt')
    if (jwtPayload?.type === "superadmin") {
        if (jwtPayload.id === process.env.ADMIN_ID && jwtPayload.pass === process.env.ADMIN_PASS) {
            req.superadmin = jwtPayload
            return done(null, jwtPayload)
        } else {
            return done(null, false);
        }
    } else {
        User.findById(jwtPayload._id)
            .then(user => {
                if (user) {
                    req.user = user
                    return done(null, user)
                } else {
                    console.log('LOG : User unidentified')
                    return done(null, false);
                }
            })
            .catch(err => {
                console.log('Error finding user through JWT._id', err);
                return done(true, false)
            })
    }
}))

export default passport
