import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import Form from 'components/Form';
import Divider from 'components/Divider';
import Typography from 'components/Typography';

const Signin = () => {
  return (
    <div className="signinLogin__container">
      <Typography variant="h1">S'inscrire</Typography>
      <div className="form__container">
        <Button variant="outlined" color="primary" fullWidth>
          S'inscrire avec Google
        </Button>
        <Divider>ou</Divider>
        <Form>
          <Input fullWidth label="Adresse email" id="email" type="email" />
          <Input fullWidth label="Mot de passe" id="password" type="password" />
          <Button variant="filled" color="tertiary" fullWidth>
            S'inscrire
          </Button>
        </Form>
      </div>
      <Typography textAlign="center">Vous avez déjà un compte ? </Typography>
      <Typography textAlign="center" link="/login" variant="link">
        Connectez vous ici
      </Typography>
    </div>
  );
};

export default Signin;
