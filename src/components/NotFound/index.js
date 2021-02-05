import React from 'react';

import './notFound.scss';
import francis from 'src/assets/images/francis.jpg';

const NotFound = () => (
  <div className="notFound">
    <h1 className="title">Cette page n'existe pas.</h1>
    <div className="main">
      <div className="picture-content">
        <img src={francis} alt="Un Francis" className="picture" />
      </div>
      <p className="content">
        Promets-moi si tu me survis <br />
        D'être plus fort que jamais <br />
        Je serai toujours dans ta vie <br />
        Près de toi, je te promets <br />
        Et si la mort me programme <br />
        Sur son grand ordinateur <br />
        De ne pas en faire un drame <br />
        De ne pas en avoir peur <br />
        Pense à moi, comme je t'aime <br />
        Et tu me délivreras <br />
        Tu briseras l'anathème <br />
        Qui me tient loin de tes bras <br />
        Pense à moi, comme je t'aime <br />
        Rien ne nous séparera <br />
        Même pas les chrysanthèmes <br />
        Tu verras, on se retrouvera <br />
        N'oublie pas ce que je t'ai dit <br />
        L'amour est plus fort que tout <br />
        Ni l'enfer ni le paradis <br />
        Ne se mettront entre nous <br />
        Et si la mort me programme <br />
        Sur son grand ordinateur <br />
        Elle ne prendra que mon âme <br />
        Mais elle n'aura pas mon cœur <br />
        Pense à moi, comme je t'aime <br />
        Et tu me délivreras <br />
        Tu briseras l'anathème <br />
        Qui me tient loin de tes bras <br />
        Pense à moi, comme je t'aime <br />
        Rien ne nous séparera <br />
        Même pas les chrysanthèmes <br />
        Tu verras, on se retrouvera <br />
        On se retrouvera <br />
        On se retrouvera
      </p>
    </div>
  </div>
);

export default NotFound;
