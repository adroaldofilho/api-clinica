import * as passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import UsuarioService from '../usuario/usuario.service';
const { secret } = require('../../config/env');

export class AuthService {

    config(){
        let opts = {
            secretOrKey: secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        };
        passport.use(new Strategy(opts, (jwtPayload, done) => {
            UsuarioService
                .getById(jwtPayload.idUsuario)
                .then(usuario => {
                    if (usuario) {
                        return done(null, {
                            idUsuario: usuario.idUsuario,
                            email: usuario.email
                        });
                    }
                    return done(null, false);
                })
                .catch(error => {
                    done(error, null)
                });
        }));
    
        return {
            initialize: () => passport.initialize(),
            authenticate: () => passport.authenticate('jwt', { session: false })
        }
    }
}

// export default new AuthService();