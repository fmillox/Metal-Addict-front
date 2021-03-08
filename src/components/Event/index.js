// == Npm import
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Moment from 'moment';
import 'moment/locale/fr';
import ChatIcon from '@material-ui/icons/Chat';

// == Import
import Reviews from 'src/components/Reviews';
import Pictures from 'src/components/Pictures';
import UploadPicture from 'src/components/UploadPicture';
import { Back, AddEventUser, EventUserChecked } from 'src/components/Icons';

import { SECONDARY_COLOR } from 'src/styles/vars';

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

// == Component
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

  useEffect(() => {
    loadEventDatas(setlistId, history);
  }, []);

  const [bandLogo, setBandLogo] = useState('');
  const [showBandLogo, setShowBandLogo] = useState(false);
  const [bandPicture, setBandPicture] = useState('');
  const [bandThumb, setBandThumb] = useState('');
  const [showBandThumb, setShowBandThumb] = useState(false);

  useEffect(() => {
    if (event !== null) {
      setBandLogo(getBandPictureUrl(event.bandImages.musiclogo));
      // eslint-disable-next-line max-len
      setShowBandLogo(event.bandImages.musiclogo !== undefined && event.bandImages.musiclogo.length > 0);
      setBandPicture(getBandPictureUrl(event.bandImages.artistbackground));
      setBandThumb(getBandPictureUrl(event.bandImages.artistthumb));
      // eslint-disable-next-line max-len
      setShowBandThumb(event.bandImages.artistthumb !== undefined && event.bandImages.artistthumb.length > 0);
    }
  }, [event]);

  const unifiedSetlist = getUnifiedSetList(event);
  const isUserParticipatedInEvent = checkUserParticipatedInEvent(participatedUsers, currentUser);
  const isUserPublishedAnEventReview = checkUserPublishedAnEventReview(reviews, currentUser);

  return (
    <div className="event">
      {
        loadingEvent && <ScaleLoader color={SECONDARY_COLOR} />
      }
      {
        !loadingEvent && (
          <>
            <div className="event-header">
              <a onClick={() => history.goBack()}>
                <Back className="event-back-to-events-results" />
              </a>
              <div className="event-user">
                <span>({participatedUsers.length})</span>
                {
                  !isUserParticipatedInEvent && (
                    <div className="event-user-not-checked-info">
                      <a
                        onClick={() => userParticipateInEvent(setlistId, history)}
                      >
                        <AddEventUser className="event-user-not-checked" />
                      </a>
                      <span>Cliquez ici si vous y avez participé </span>
                    </div>
                  )
                }
                {
                  isUserParticipatedInEvent && <EventUserChecked className="event-user-checked" />
                }
              </div>
            </div>
            <div className="event-band-img-container">
              <LazyLoadImage
                className="event-band-img"
                src={bandPicture}
                alt={event.setlist.artist.name}
                effect="blur"
              />
            </div>
            <div className="event-band">
              {
                showBandLogo && (
                <LazyLoadImage
                  src={bandLogo}
                  alt={event.setlist.artist.name}
                  effect="blur"
                  className="image-band"
                />
                )
              }
              {
                !showBandLogo && event.setlist.artist.name
              }
            </div>
            <div className="event-data">
              <div className="event-date">
                <span className="event-date-line-left" />
                <span className="event-date-line-right" />
                <span className="event-date-top" />
                <span className="event-date-bottom">
                  {
                    Moment(event.setlist.eventDate, 'DD-MM-YYYY').locale('fr').format('DD MMM YYYY')
                  }
                </span>
              </div>
              <div className="event-venue">
                {event.setlist.venue.name}
                <div className="event-city-country">
                  {
                    changeCityName(event.setlist.venue.city.name)
                  }
                  {
                    `, ${event.setlist.venue.city.country.name}`
                  }
                </div>
              </div>

            </div>
            {
              (unifiedSetlist.length > 0) && (
                <>
                  <div className="event-setlist-container">
                    <div className="event-setlist-label">
                      Setlist
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
                  {
                    showBandThumb && (
                      <div className="secondary-picture-container">
                        <LazyLoadImage
                          className="event-band-second-img"
                          src={bandThumb}
                          alt={event.setlist.artist.name}
                          effect="blur"
                        />
                      </div>
                    )
                  }
                </>
              )
            }
            {
              loadingReviews && <ScaleLoader color={SECONDARY_COLOR} />
            }
            {
              !loadingReviews && (
                <div className="event-reviews-container">
                  <div className="event-reviews-label">
                    <span>Chroniques ({reviews.length})</span>
                    {
                      isUserParticipatedInEvent && !isUserPublishedAnEventReview && (
                        <NavLink
                          className="event-reviews-create"
                          to={`/chronique/creer/${getSlug(event.setlist.artist.name, setlistId)}`}
                        >
                          <ChatIcon />
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
              loadingPictures && <ScaleLoader color={SECONDARY_COLOR} />
            }
            {
              !loadingPictures && (
                <div className="event-pictures-container">
                  <div className="event-pictures-label">
                    {
                      isUserParticipatedInEvent && (
                        <UploadPicture
                          loading={loadingUploadPicture}
                          manageSubmit={manageUploadPicture}
                        />
                      )
                    }
                    <span>Photos ({pictures.length})</span>
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
  /** called when the component renders the first time (useEffect) , two parameters :
   * - setlistId
   * - history
   */
  loadEventDatas: PropTypes.func.isRequired,
  /** boolean to indicate that the event datas are loading */
  loadingEvent: PropTypes.bool.isRequired,
  /** event object representing the Setlist.fm API and Fanart.tv API */
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
  /** the connected user object (can be null if anonymous user) */
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }.isRequired),
  /** list of user object already participated at the event */
  participatedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }.isRequired).isRequired,
  ).isRequired,
  /** called onclick to indicate user connected has partipated at the event, two parameters :
   * - setlistId
   * - history
   */
  userParticipateInEvent: PropTypes.func.isRequired,
  /** boolean to indicate that the reviews are loading */
  loadingReviews: PropTypes.bool.isRequired,
  /** list of review object */
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** boolean to indicate that the pictures are loading */
  loadingPictures: PropTypes.bool.isRequired,
  /** list of picture object */
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** boolean to indicate that a the user is uploading a picture */
  loadingUploadPicture: PropTypes.bool.isRequired,
  /** called when the form is submitted, two parameters :
   * - data
   * - history
   */
  manageUploadPicture: PropTypes.func.isRequired,
};

Event.defaultProps = {
  event: null,
  currentUser: null,
};

// == Export
export default Event;
