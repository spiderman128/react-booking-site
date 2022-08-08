// Dependencies
import { FC, useEffect, useState } from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

// Components
import { Typography } from '../../Common';

// Styles
import * as S from './styles';
import MobileHeader from './MobileHeader';
import ClientsView from './ClientsView';
import ChatsView from './ChatsView';
import InfoView from './InfoView';
import PhotosView from './PhotosView';

// Interface
interface IChatsModalProps {
  open: boolean;
  onClose: () => void;
}

interface IChat {
  message: string;
  type: 'received' | 'sent';
  createdAt: string;
  image?: string;
}

export interface IClient {
  id: number;
  image?: string;
  firstName: string;
  lastName: string;
  chats: IChat[];
  unread?: number;
}

export enum VisibleSection {
  Clients = 'clients',
  Detail = 'detail',
  Info = 'info',
  Photos = 'photos',
}

// Export Chats modal
export const ChatsModal: FC<IChatsModalProps> = ({ open, onClose }) => {
  // Get translation from hook
  const { t } = useTranslation();

  // States
  const [client, setClient] = useState<IClient>();
  const [visibleInformation, setVisibleInformation] = useState<boolean>(false);
  const [visibleSection, setVisibleSection] = useState<VisibleSection>(
    VisibleSection.Clients
  );

  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Close handler
  const handleClose = () => {
    onClose();
    setVisibleSection(VisibleSection.Clients);
  };

  // Chat click handler
  const handleClickClient = (client) => {
    setClient(client);
    if (isMobile) {
      setVisibleSection(VisibleSection.Detail);
    }
  };

  // Open client information
  const handleOpenInformation = () => {
    setVisibleInformation(true);
    if (isMobile) {
      setVisibleSection(VisibleSection.Info);
    }
  };

  // Close information handler
  const handleCloseInformation = () => {
    setVisibleInformation(false);
  };

  // Open photos handler
  const handleOpenPhotos = () => {
    setVisibleSection(VisibleSection.Photos);
  };

  // Go back handler
  const handleGoBack = () => {
    switch (visibleSection) {
      case VisibleSection.Detail: {
        setVisibleSection(VisibleSection.Clients);
        break;
      }
      case VisibleSection.Info: {
        setVisibleSection(VisibleSection.Detail);
        break;
      }
      case VisibleSection.Photos: {
        setVisibleSection(VisibleSection.Info);
        break;
      }
      default:
        break;
    }
  };

  // On change platform
  useEffect(() => {
    setVisibleSection(VisibleSection.Clients);
  }, [isMobile]);

  // Return chats modal
  return (
    <S.ChatsModal
      open={open}
      onClose={handleClose}
      title={
        isMobile ? (
          <>
            {visibleSection === VisibleSection.Clients && (
              <Stack
                height={27}
                direction="row"
                spacing={8}
                alignItems="center"
              >
                <Typography variant="h2">{t('chats.chats')}</Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={(theme) => ({
                    borderRadius: 1.5,
                    width: 24,
                    height: 24,
                    color: theme.palette.common.white,
                    bgcolor: theme.palette.error.main,
                  })}
                >
                  2
                </Typography>
              </Stack>
            )}
            {visibleSection === VisibleSection.Detail && (
              <MobileHeader
                title={`${client?.firstName} ${client?.lastName}`}
                subtitle={`Chats / ${client?.firstName} ${client?.lastName}`}
                onGoBack={handleGoBack}
              />
            )}
            {visibleSection === VisibleSection.Info && (
              <MobileHeader
                title={`${client?.firstName} ${client?.lastName}`}
                subtitle={`Chats / ${client?.firstName} ${client?.lastName} / User Info`}
                onGoBack={handleGoBack}
              />
            )}
            {visibleSection === VisibleSection.Photos && (
              <MobileHeader
                title="Photos"
                subtitle={`Chats / ${client?.firstName} ${client?.lastName} / User Info / Photos`}
                onGoBack={handleGoBack}
              />
            )}
          </>
        ) : (
          <Stack direction="row" spacing={8} alignItems="center">
            <Typography variant="h2">{t('chats.chats')}</Typography>
            <Typography
              variant="body2"
              align="center"
              sx={(theme) => ({
                borderRadius: 1.5,
                width: 24,
                height: 24,
                color: theme.palette.common.white,
                bgcolor: theme.palette.error.main,
              })}
            >
              2
            </Typography>
          </Stack>
        )
      }
    >
      <PerfectScrollbar style={{ margin: -20 }}>
        <Stack direction="row">
          <ClientsView
            visible={visibleSection === VisibleSection.Clients}
            onClickClient={handleClickClient}
          />
          <ChatsView
            client={client}
            visible={visibleSection === VisibleSection.Detail}
            onClickInformation={handleOpenInformation}
          />
          {visibleInformation && (
            <InfoView
              client={client}
              visible={visibleSection === VisibleSection.Info}
              onCloseInformation={handleCloseInformation}
              onPhotoClick={handleOpenPhotos}
            />
          )}
          <PhotosView visible={visibleSection === VisibleSection.Photos} />
        </Stack>
      </PerfectScrollbar>
    </S.ChatsModal>
  );
};
