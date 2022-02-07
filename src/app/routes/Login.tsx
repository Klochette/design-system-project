import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Form from 'components/Form';
import Divider from 'components/Divider';
import Typography from 'components/Typography';

const Login = () => {
  return (
    <div className="signinLogin__container">
      <Typography variant="h1">Se connecter</Typography>
      <div className="form__container">
        <Button variant="outlined" color="primary" fullWidth>
          Se connecter avec Google
        </Button>
        <Divider>ou</Divider>
        <Form>
          <Input fullWidth label="Adresse email" id="email" type="email" />
          <Input fullWidth label="Mot de passe" id="password" type="password" />
          <Typography link="/passwordRecovery" variant="link">
            Mot de passe oublié ?
          </Typography>
          <Button variant="filled" color="tertiary" fullWidth>
            S'inscrire
          </Button>
        </Form>
      </div>
      <Typography textAlign="center">
        Vous n'avez pas encore de compte ?
      </Typography>
      <Typography textAlign="center" link="/passwordRecovery" variant="link">
        Inscrivez vous ici
      </Typography>
    </div>
  );
};

export default Login;
