// Dependencies
import React, { FC, ReactNode, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';

// Components
import {
  Button,
  Carousel,
  Chip,
  Icon,
  IconButton,
  Typography,
} from '../../../components';

import * as S from './styles';

// Interfaces
import { IObject } from '../../../interfaces';
import { RootState } from '../../../redux/reducers';

interface IObjectPanelProps {
  data: any;
  objects: IObject[];
  setObjects: (state: any) => void
}

interface IObjectColumnProps {
  status: string;
  children: ReactNode;
}

interface IObjectCardProps {
  index: number;
  object: IObject;
  setObjects: (state: any) => void;
  moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
}

const ObjectColumn: FC<IObjectColumnProps> = ({
  status,
  children,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'Type',
    drop: () => ({ name: status }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    canDrop: (item) => {
      return true;
    }
  });

  return (
    <Card
      ref={drop}
      sx={(theme) => ({
        width: {
          xs: '100%',
          md: 322,
        },
        height: '100%',
        boxShadow: 'none',
        backgroundColor: isOver ? theme.palette.info.main : theme.palette.secondary.main,
      })}
    >
      {children}
    </Card>
  );
};

const ObjectCard: FC<IObjectCardProps> = ({
  index,
  object,
  setObjects,
}) => {
  // Get translation from hook
  const { t } = useTranslation();

  const {
    id,
    photo,
    name,
    email,
    address,
    status,
    subStatus,
  } = object;
  const changeItemColumn = (currentItem, columnStatus) => {
    setObjects((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          status: e.id === currentItem.id ? columnStatus : e.status
        };
      });
    });
  };

  const ref = useRef<any>(null);

  const [, drop] = useDrop({
    accept: 'Type',
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, id, name, status, type: 'Type' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        switch (name) {
          case 'New':
            changeItemColumn(item, 'New');
            break;
          case 'In Progress':
            changeItemColumn(item, 'In Progress');
            break;
          case 'Rejected':
            changeItemColumn(item, 'Rejected');
            break;
          case 'Bounce':
            changeItemColumn(item, 'Bounce');
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <S.DraggableCard ref={ref} isDragging={isDragging}>
      <S.EmptyCardContent />
      <CardHeader
        sx={{ p: 16 }}
        title={
          <ListItem
            disablePadding
            sx={{
              ':hover': {
                backgroundColor: 'transparent',
              },
            }}
            secondaryAction={
              <IconButton
                color="default"
                sx={{ mr: -14 }}
              >
                <Icon name="ellipsis" size={18} />
              </IconButton>
            }
          >
            <ListItemAvatar sx={{ minWidth: 76 }}>
              <Avatar src={photo} />
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        {subStatus && (
          <Chip
            color="success"
            label={subStatus}
            sx={{ mb: 16 }}
          />
        )}
        <Stack mb={8} direction="row" spacing={8}>
          <Box>
            <Icon name="mail" />
          </Box>
          <Typography variant="body2" noWrap>
            {email}
          </Typography>
        </Stack>
        <Stack mb={16} direction="row" spacing={8}>
          <Box>
            <Icon name="location" />
          </Box>
          <Typography variant="body2" noWrap>
            {address}
          </Typography>
        </Stack>
        <Button>{t('objects.send_message')}</Button>
      </CardContent>
    </S.DraggableCard>
  )
};

// Export objects page
export const ObjectPanel: FC<IObjectPanelProps> = ({ data, objects, setObjects }) => {
  // Theme
  const theme = useTheme();

  // Check platform
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Get drawer status from store
  const isDrawerOpened = useSelector(
    ({ uiReducer: { isDrawerOpened } }: RootState) => isDrawerOpened
  );

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = objects[dragIndex];

    if (dragItem) {
      setObjects((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  // Return objects page
  return (
    <DndProvider backend={HTML5Backend}>
      <PerfectScrollbar
        style={
          isMobile
            ? { maxWidth: 'calc(100vw - 72px)' }
            : {
              maxWidth: isDrawerOpened
                ? 'calc(100vw - 202px)'
                : 'calc(100vw - 370px)',
            }
        }
      >
        <Stack
          spacing={24}
          display="inline-flex"
          alignItems="flex-start"
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            width: {
              xs: '100%',
              sm: 'unset',
            },
            height: '100%',
            pb: '12px',
          }}
        >
          {data.map(({ status, objects }, bIndex) => (
            <ObjectColumn key={bIndex} status={status}>
              <CardHeader
                sx={{ p: 16 }}
                title={
                  <Stack direction="row" alignItems="center" spacing={12}>
                    <Typography variant="h3">{status}</Typography>
                    <Typography
                      variant="h3"
                      sx={(theme) => ({
                        color: theme.palette['lightIndigo'],
                      })}
                    >
                      {objects.length}
                    </Typography>
                  </Stack>
                }
              />
              <CardContent sx={{ pt: 0 }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <S.PanelColumnContent>
                    <Stack spacing={10}>
                      {objects.map((object, oIndex) => (
                        <ObjectCard
                          index={oIndex}
                          key={oIndex}
                          object={object}
                          moveCardHandler={moveCardHandler}
                          setObjects={setObjects}
                        />
                        )
                      )}
                    </Stack>
                  </S.PanelColumnContent>
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                  <Carousel option={{ startPosition: 0 }}>
                    {objects
                      .reduce((page: IObject[][], object, index) => {
                        if (index % 2 === 0) {
                          return [...page, [object]];
                        } else {
                          return [
                            ...page.slice(0, page.length - 1),
                            [...page[page.length - 1], object],
                          ];
                        }
                      }, [])
                      .map((page, oIndex) => (
                        <Stack spacing={10} key={oIndex}>
                          {page.map(
                            (
                              { photo, name, email, address, subStatus },
                              pIndex
                            ) => (
                              <Card key={pIndex}>
                                <CardHeader
                                  sx={{ p: 16 }}
                                  title={
                                    <ListItem
                                      disablePadding
                                      sx={{
                                        ':hover': {
                                          backgroundColor: 'transparent',
                                        },
                                      }}
                                      secondaryAction={
                                        <IconButton
                                          color="default"
                                          sx={{ mr: -14 }}
                                        >
                                          <Icon name="ellipsis" size={18} />
                                        </IconButton>
                                      }
                                    >
                                      <ListItemAvatar sx={{ minWidth: 76 }}>
                                        <Avatar src={photo} />
                                      </ListItemAvatar>
                                      <ListItemText primary={name} />
                                    </ListItem>
                                  }
                                />
                                <CardContent sx={{ pt: 0 }}>
                                  {subStatus && (
                                    <Chip
                                      color="success"
                                      label={subStatus}
                                      sx={{ mb: 16 }}
                                    />
                                  )}
                                  <Stack mb={8} direction="row" spacing={8}>
                                    <Box>
                                      <Icon name="mail" />
                                    </Box>
                                    <Typography variant="body2" noWrap>
                                      {email}
                                    </Typography>
                                  </Stack>
                                  <Stack
                                    mb={16}
                                    direction="row"
                                    spacing={8}
                                  >
                                    <Box>
                                      <Icon name="location" />
                                    </Box>
                                    <Typography variant="body2" noWrap>
                                      {address}
                                    </Typography>
                                  </Stack>
                                  <Button>Send Message</Button>
                                </CardContent>
                              </Card>
                            )
                          )}
                        </Stack>
                      ))}
                  </Carousel>
                </Box>
              </CardContent>
            </ObjectColumn>
          ))}
        </Stack>
      </PerfectScrollbar>
    </DndProvider>
  );
};
