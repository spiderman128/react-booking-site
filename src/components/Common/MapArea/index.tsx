import React, { FC, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const MapArea: FC = (props: any) => {
  const { google } = props;

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState<any>({});
  const [selectedPlace, setSelectedPlace] = useState<any>({});

  const onMarkerClick = (props: any, marker: any) => {
    setShowingInfoWindow(true);
    setActiveMarker(marker);
    setSelectedPlace(props);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  // @ts-ignore
  return (
    <>
      <Map
        google={google}
        initialCenter={props.center}
        onReady={props.handleMapReady}
        containerStyle={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
        onClick={onMapClicked}
      >
        <Marker onClick={onMarkerClick} />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          google={google}
          map={null}
        >
          <div>
            <h1>{selectedPlace?.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </>
  );
};

export default GoogleApiWrapper(function () {
  return {
    apiKey: 'AIzaSyB-aQ_qgNWRBRvMz5jlS8T9g3DU_Ob5ly0',
    libraries: ['visualization'],
    panControl: false,
    mapTypeControl: false,
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: 'off' },
        ],
      },
    ],
  };
})(MapArea);
