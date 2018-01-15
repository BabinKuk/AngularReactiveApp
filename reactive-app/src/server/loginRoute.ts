import {User} from '../app/shared/model/user';

const auth = {
    'bimba@bimba.com': 'bimba',
    'lilo@lilo.com': 'lilo'
};

const users: {[key: string]: User} = {
    'bimba@bimba.com': {
        firstName: 'bimba'
    },
    'lilo@lilo.com': {
        firstName: 'lilo'
    }
};

export function loginRoute(req, res) {
    const payload = req.body;

    console.log('verifying password ...', payload);

    if (auth[payload.email] && auth[payload.email] === payload.password) {
      console.log('user ok...');
      console.log('auth[payload.email]: ' + auth[payload.email]);
      console.log('auth[payload.email] === payload.password: ' + auth[payload.email] === payload.password);
      res.status(200).json(users[payload.email]);
    } else {
      console.log('else 500');
      res.sendStatus(500);
    }
}
