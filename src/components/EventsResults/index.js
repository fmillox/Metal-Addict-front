// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// == Import
import Events from 'src/containers/Events';

import { SECONDARY_COLOR } from 'src/styles/vars';

import { getBandPictureUrl } from 'src/utils';

import './eventsResults.scss';

// == Composant
const EventsResults = ({
  loadingEvents,
  events,
  moreEvents,
  manageMoreEventsSubmit,
}) => {
  const history = useHistory();
  const [bandLogo, setBandLogo] = useState('');
  const [showBandLogo, setShowBandLogo] = useState(false);

  useEffect(() => {
    if (events !== null) {
      setBandLogo(getBandPictureUrl(events.bandImages.musiclogo));
      // eslint-disable-next-line max-len
      setShowBandLogo(events.bandImages.musiclogo !== undefined && events.bandImages.musiclogo.length > 0);
    }
  }, [events]);

  return (
    <div className="eventsResults">
      {
        loadingEvents && <ScaleLoader color={SECONDARY_COLOR} />
      }
      {
        !loadingEvents && (
          <>
            <div className="eventsResults-nb-events-found">
              {events.total} résultat(s) trouvé(s)
            </div>
            {
              events.setlist.length > 0 && showBandLogo && (
                <LazyLoadImage
                  className="eventsResults-band-img"
                  src={bandLogo}
                  alt={events.setlist[0].artist.name}
                  effect="blur"
                />
              )
            }
            {
              events.setlist.length > 0 && !showBandLogo && (
                <div className="eventsResults-band">
                  {events.setlist[0].artist.name}
                </div>
              )
            }
            <div className="eventsResults-events">
              <Events
                events={events.setlist}
                loadingEvents={loadingEvents}
                moreEvents={moreEvents}
                manageSubmit={() => manageMoreEventsSubmit(history)}
              />
            </div>
          </>
        )
      }
    </div>
  );
};

EventsResults.propTypes = {
  loadingEvents: PropTypes.bool.isRequired,
  events: PropTypes.object,
  moreEvents: PropTypes.bool.isRequired,
  manageMoreEventsSubmit: PropTypes.func.isRequired,
};

EventsResults.defaultProps = {
  events: null,
};

// == Export
export default EventsResults;
