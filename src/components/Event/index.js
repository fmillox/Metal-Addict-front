import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { UserPlus, UserCheck, Plus } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';
import UploadPicture from 'src/components/UploadPicture';

import {
  getUnifiedSetList,
  getIdFromSlug,
  getSlug,
  changeCityName,
  checkUserParticipatedInEvent,
  checkUserPublishedAnEventReview,
  getBandPictureUrl,
} from 'src/utils';

import './event.scss';

const Event = ({
  loadEventDatas,
  loadingEvent,
  event,
  currentUser,
  participatedUsers,
  userParticipateInEvent,
  loadingReviews,
  reviews,
  loadingPictures,
  pictures,
  loadingUploadPicture,
  manageUploadPicture,
}) => {
  const { slug } = useParams();
  const setlistId = getIdFromSlug(slug);
  const history = useHistory();
  const unifiedSetlist = getUnifiedSetList(event);

  useEffect(() => {
    loadEventDatas(setlistId, history);
  }, []);

  const isUserParticipatedInEvent = checkUserParticipatedInEvent(participatedUsers, currentUser);
  const isUserPublishedAnEventReview = checkUserPublishedAnEventReview(reviews, currentUser);

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
              <div className="event-user">
                <span>({participatedUsers.length})</span>
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
            </div>
            <div className="event-band">
              {
                event.bandImages.musiclogo.length > 0 && (
                  <LazyLoadImage
                    src={getBandPictureUrl(event.bandImages.musiclogo)}
                    alt={event.setlist.artist.name}
                    effect="blur"
                  />
                )
              }
              {
                event.bandImages.musiclogo.length === 0 && event.setlist.artist.name
              }
            </div>
            <div className="event-band-img-container">
              <LazyLoadImage
                className="event-band-img"
                src={getBandPictureUrl(event.bandImages.artistbackground)}
                alt={event.setlist.artist.name}
                effect="blur"
              />
            </div>
            <div className="event-data">
              <div className="event-date">
                {event.setlist.eventDate}
              </div>
              <div className="event-city-country">
                {
                  changeCityName(event.setlist.venue.city.name)
                } (
                {
                  event.setlist.venue.city.country.name
                }
                )
              </div>
              <div className="event-venue">
                {event.setlist.venue.name}
              </div>
            </div>
            {
              (unifiedSetlist.length > 0) && (
                <div className="event-setlist-container">
                  <div className="event-setlist-label">
                    Liste des chansons
                  </div>
                  <ul className="event-setlist-list">
                    {
                      unifiedSetlist.map(({ numb, name }) => (
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
                    <span>Chroniques ({reviews.length})</span>
                    {
                      isUserParticipatedInEvent && !isUserPublishedAnEventReview && (
                        <NavLink
                          // eslint-disable-next-line prefer-template
                          to={'/chronique/creer/' + getSlug(event.setlist.artist.name, setlistId)}
                        >
                          <Plus />
                        </NavLink>
                      )
                    }
                  </div>
                  <div className="event-reviews-list">
                    <Reviews reviews={reviews} showMoreData={false} />
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
                    <span>Photos ({pictures.length})</span>
                    {
                      isUserParticipatedInEvent && (
                        <UploadPicture
                          loading={loadingUploadPicture}
                          manageSubmit={manageUploadPicture}
                        />
                      )
                    }
                  </div>
                  <div className="event-pictures-list">
                    <Pictures pictures={pictures} picturesOnScreen={8} showNickname />
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
    setlist: PropTypes.shape({
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
    bandImages: PropTypes.object.isRequired,
  }.isRequired),
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }.isRequired),
  participatedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  userParticipateInEvent: PropTypes.func.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingPictures: PropTypes.bool.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingUploadPicture: PropTypes.bool.isRequired,
  manageUploadPicture: PropTypes.func.isRequired,
};

Event.defaultProps = {
  event: null,
  currentUser: null,
};

export default Event;
