import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  useParams,
  useLocation,
  Redirect,
  Link,
} from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';
import { getUnifiedSetList, extractSetlistIdFromSlug } from 'src/utils';
import './event.scss';
const Event = ({
  redirectTo,
  loadingEvent,
  loadEvent,
  event,
  picture,
  loadingReviews,
  reviews,
  loadingPictures,
  pictures,
}) => {
  const { slug } = useParams();
  const setlistId = extractSetlistIdFromSlug(slug);
  const { pathname } = useLocation();
  const refEvent = useRef(null);
  
  /*
  if (redirectTo !== undefined) {
    return <Redirect to={redirectTo} />;
  }
  */
  useEffect(() => {
    loadEvent(setlistId, pathname);
    refEvent.current.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <div className="event" ref={refEvent}>
      {
        loadingEvent && <ScaleLoader />
      }
      {
        !loadingEvent && (
          <>
            <Link
              className="event-back-to-events-results"
              to="/"
            >
              Retour aux résultats précédents
            </Link>
            <div className="event-band">
              {event.artist.name}
            </div>
            <div className="event-band-img-container">
              <img className="event-band-img" src={picture} alt={event.artist.name} />
            </div>
            <div className="event-data">
              <div className="event-date">
                {event.eventDate}
              </div>
              <div className="event-city-country">
                {event.venue.city.name} - {event.venue.city.country.name}
              </div>
              <div className="event-venue">
                {event.venue.name}
              </div>
            </div>
            {
              (event.sets.set.length > 0) && (
                <div className="event-setlist-container">
                  <div className="event-setlist-label">
                    Liste des chansons
                  </div>
                  <ul className="event-setlist-list">
                    {
                      getUnifiedSetList(event.sets.set).map(({ numb, name }) => (
                        <li className="event-setlist-list-item" key={numb}>
                          {numb} - {name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
            {
              loadingReviews && <ScaleLoader />
            }
            {
              !loadingReviews && (
                <div className="event-reviews-container">
                  <div className="event-reviews-label">
                    Chroniques
                  </div>
                  <div className="event-reviews-list">
                    <Reviews reviews={reviews} />
                  </div>
                </div>
              )
            }
            {
              loadingPictures && <ScaleLoader />
            }
            {
              !loadingPictures && (
                <div className="event-pictures-container">
                  <div className="event-pictures-label">
                    Photos
                  </div>
                  <div className="event-pictures-list">
                    <Pictures pictures={pictures} />
                  </div>
                </div>
              )
            }
          </>
        )
      }
    </div>
  );
};
Event.propTypes = {
  redirectTo: PropTypes.string,
  loadingEvent: PropTypes.bool.isRequired,
  loadEvent: PropTypes.func.isRequired,
  event: PropTypes.shape({
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }.isRequired).isRequired,
    eventDate: PropTypes.string.isRequired,
    venue: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        country: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }.isRequired).isRequired,
      }.isRequired).isRequired,
    }.isRequired).isRequired,
    sets: PropTypes.shape({
      set: PropTypes.arrayOf(
        PropTypes.shape({
          song: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
            }.isRequired).isRequired,
          ).isRequired,
        }.isRequired).isRequired,
      ).isRequired,
    }.isRequired).isRequired,
  }.isRequired),
  picture: PropTypes.string.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingPictures: PropTypes.bool.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Event.defaultProps = {
  redirectTo: undefined,
  event: null,
};
export default Event;
