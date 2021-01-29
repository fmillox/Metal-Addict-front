import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { UserPlus, UserCheck, Plus } from 'react-feather';

import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';
import UploadPicture from 'src/containers/UploadPicture';

import { getUnifiedSetList, getIdFromSlug, getSlug } from 'src/utils';

import './event.scss';

const Event = ({
  loadEventDatas,
  loadingEvent,
  event,
  isUserParticipatedInEvent,
  userParticipateInEvent,
  isUserPublishedAnEventReview,
  picture,
  loadingReviews,
  reviews,
  loadingPictures,
  pictures,
  manageUploadPicture,
}) => {
  const { slug } = useParams();
  const setlistId = getIdFromSlug(slug);
  const history = useHistory();

  useEffect(() => {
    loadEventDatas(setlistId, history);
  }, []);

  return (
    <div className="event">
      {
        loadingEvent && <ScaleLoader />
      }
      {
        !loadingEvent && (
          <>
            <div className="event-header">
              <a
                className="event-back-to-events-results"
                onClick={() => history.goBack()}
              >
                Retour aux résultats précédents
              </a>
              {
                !isUserParticipatedInEvent && (
                  <div className="event-user-not-checked-info">
                    <UserPlus
                      className="event-user-not-checked"
                      onClick={() => userParticipateInEvent(setlistId, history)}
                    />
                    <span>Cliquez ici si vous y avez participé </span>
                  </div>
                )
              }
              {
                isUserParticipatedInEvent && (
                  <UserCheck className="event-user-checked" />
                )
              }
            </div>
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
                    {
                      isUserParticipatedInEvent && !isUserPublishedAnEventReview && (
                        <NavLink
                          className="event-reviews-create"
                          // eslint-disable-next-line prefer-template
                          to={'/chronique/creer/' + getSlug(event.artist.name, setlistId)}
                        >
                          <Plus />
                        </NavLink>
                      )
                    }
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
                    <span>Photos</span>
                    {
                      isUserParticipatedInEvent && (
                        <UploadPicture manageSubmit={manageUploadPicture} />
                      )
                    }
                  </div>
                  <div className="event-pictures-list">
                    <Pictures pictures={pictures} picturesOnScreen={8} />
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
  loadEventDatas: PropTypes.func.isRequired,
  loadingEvent: PropTypes.bool.isRequired,
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
  isUserParticipatedInEvent: PropTypes.bool.isRequired,
  userParticipateInEvent: PropTypes.func.isRequired,
  isUserPublishedAnEventReview: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingPictures: PropTypes.bool.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  manageUploadPicture: PropTypes.func.isRequired,
};

Event.defaultProps = {
  event: null,
};

export default Event;
