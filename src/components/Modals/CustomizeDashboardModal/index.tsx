// Dependencies
import React, { FC, useEffect, useMemo, useState } from 'react';
import GridLayout from 'react-grid-layout';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Dialog } from '../../Common';
import { Button, Icon } from '../../Common';
import { INITIAL_DASHBOARD_LAYOUTS } from '../../../constants';
import { RootState } from '../../../redux/reducers';
import { setDashboardLayout } from '../../../redux/actions';
import * as S from './styles';

interface IConsultationDocumentsWidgetProps {
  open: boolean;
  onClose: () => void;
}

const layoutMargin = [16, 16];
const layoutContainerPadding = [16, 16];
const layoutRowHeights = { xl: 220, lg: 220, md: 60, sm: 56 };
const COLS = { xl: 2, lg: 1, md: 1, sm: 1 };

export const CustomizeDashboardModal: FC<IConsultationDocumentsWidgetProps> = ({
  open,
  onClose,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { layouts, breakpoint } = useSelector(
    ({ uiReducer: { layouts, breakpoint } }: RootState) => ({
      layouts,
      breakpoint,
    })
  );

  const currentLayout = useMemo(
    () => layouts[breakpoint],
    [breakpoint, layouts]
  );

  const [panels, setPanels] = useState<any>([]);
  const [dialogLayouts, setDialogLayouts] = useState({});
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    setDialogLayouts(layouts);
    setPanels(
      currentLayout.map((panel) => ({
        ...panel,
        ...currentLayout.find((item) => item.i === panel.i),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layouts, breakpoint]);

  const handleTogglePanel = (e, changedIndex: number) => {
    e.stopPropagation();
    setPanels(
      panels.map((panel, index) =>
        index === changedIndex
          ? {
              ...panel,
              visible: !panel.visible,
            }
          : panel
      )
    );
  };

  const handleLayoutChange = (layout) => {
    setPanels(
      panels.map((panel) => ({
        ...panel,
        ...layout.find((item) => item.i === panel.i),
      }))
    );
    setDialogLayouts({
      ...layouts,
      [breakpoint]: layout,
    });
  };

  const handleSaveLayout = async () => {
    await dispatch(
      setDashboardLayout({
        ...layouts,
        [breakpoint]: panels,
      })
    );
    onClose();
  };

  const handleDefaultLayout = () => {
    setDialogLayouts(INITIAL_DASHBOARD_LAYOUTS);
    setPanels(INITIAL_DASHBOARD_LAYOUTS[breakpoint]);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={t('customize_dashboard.customize_dashboard')}
      actions={
        <>
          <Button size="medium" onClick={handleDefaultLayout}>
            {t('customize_dashboard.default_settings')}
          </Button>
          <Button color="secondary" size="medium" onClick={handleSaveLayout}>
            {t('customize_dashboard.save')}
          </Button>
        </>
      }
    >
      <Typography variant="body1">
        {t('customize_dashboard.description')}
      </Typography>
      <S.DashboardContent>
        <GridLayout
          isDraggable
          isResizable={false}
          rowHeight={layoutRowHeights[breakpoint]}
          margin={layoutMargin}
          cols={COLS[breakpoint]}
          layout={dialogLayouts[breakpoint]}
          containerPadding={layoutContainerPadding}
          onLayoutChange={handleLayoutChange}
          onDragStart={handleDragStart}
          onDragStop={handleDragStop}
          draggableHandle=".drag-handle"
          width={688}
        >
          {currentLayout.map(({ i }, index) => {
            const panel = panels.find(({ i: key }) => key === i);

            return (
              <S.DashboardPanel
                key={i}
                className={!panel?.visible ? 'hidden' : ''}
              >
                <Box
                  className="drag-handle"
                  sx={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <Typography>{t(`customize_dashboard.${panel?.title}`)}</Typography>
                </Box>
                <S.PanelToggleButton
                  color={panel?.visible ? 'secondary' : 'inherit'}
                  onClick={(e) => handleTogglePanel(e, index)}
                >
                  <Icon name={panel?.visible ? 'eye-close' : 'eye'} />
                </S.PanelToggleButton>
              </S.DashboardPanel>
            );
          })}
        </GridLayout>
      </S.DashboardContent>
    </Dialog>
  );
};
