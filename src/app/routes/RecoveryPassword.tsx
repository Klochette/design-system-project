import Button from 'components/Button';
import Input from 'components/Input';
import Typography from 'components/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const RecoveryPassword = (): JSX.Element => {
  return (
    <div className="recoveryPassword__container">
      <Typography variant="h1">Mot de passe oublié ?</Typography>
      <Typography>
        Entrez l’adresse mail que vous avez utilisez pour vous inscrire et nous
        vous enverrons les instructions pour réinitialiser votre mot de passe.
      </Typography>
      <Typography>
        Pour des raisons de sécurité, nous ne stockons pas votre mot de passe.
        Alors il ne sera jamais envoyé par mail.
      </Typography>
      <Input type="email" id="email" fullWidth label="Adresse email" />
      <Button color="tertiary" fullWidth>
        Recevoir les instruction
      </Button>
      <Button color="tertiary" variant="outlined" fullWidth>
        <Link to="/">Se connecter</Link>
      </Button>
    </div>
  );
};

export default RecoveryPassword;
