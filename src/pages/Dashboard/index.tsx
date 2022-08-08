// Dependencies
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import GridLayout from 'react-grid-layout';

// Widgets
import {
  ConsultationDocumentsWidget,
  LastChatsWidget,
  LastSubmittedObjectsWidget,
  LinkedInFeedWidget,
  ObjectsOverviewWidget,
  ObjectsValueWidget,
  ObjectsLocationWidget,
} from './Widgets';
import { RootState } from '../../redux/reducers';
import * as S from './styles';

// Constants
export const LAYOUT_MAP = [
  { i: 'a', component: LastChatsWidget },
  { i: 'b', component: LastSubmittedObjectsWidget },
  { i: 'c', component: ObjectsLocationWidget },
  { i: 'd', component: ConsultationDocumentsWidget },
  { i: 'e', component: ObjectsOverviewWidget },
  { i: 'f', component: ObjectsValueWidget },
  { i: 'g', component: LinkedInFeedWidget },
];
const ROW_HEIGHTS = { xl: 484, lg: 484, md: 404, sm: 312 };
const COLS = { xl: 2, lg: 1, md: 1, sm: 1 };

// Export dashboard page
export const DashboardPage: FC = () => {
  const { layouts, isDrawerOpened, breakpoint } = useSelector(
    ({ uiReducer: { layouts, isDrawerOpened, breakpoint } }: RootState) => ({
      layouts,
      isDrawerOpened,
      breakpoint,
    })
  );

  const [layoutWidth, setLayoutWidth] = useState<number>();
  const [dialogLayouts, setDialogLayouts] = useState({});

  const contentRef = useRef<HTMLDivElement>(null);

  const currentLayout = useMemo(
    () => layouts && layouts[breakpoint],
    [breakpoint, layouts]
  );

  useEffect(() => {
    setDialogLayouts(layouts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layouts, breakpoint]);

  // On mounted
  useEffect(() => {
    setLayoutWidth(contentRef.current?.clientWidth);

    window.onresize = () => {
      setLayoutWidth(contentRef.current?.clientWidth);
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  useEffect(() => {
    setLayoutWidth(contentRef.current?.clientWidth);
  }, [isDrawerOpened, contentRef.current?.clientWidth]);

  // Return dashboard page
  return (
    <S.Dashboard ref={contentRef}>
      <GridLayout
        isDraggable={false}
        isResizable={false}
        layout={dialogLayouts[breakpoint]}
        containerPadding={[0, 0]}
        margin={[28, 28]}
        cols={COLS[breakpoint]}
        rowHeight={ROW_HEIGHTS[breakpoint]}
        width={layoutWidth}
      >
        {currentLayout?.map((item) => {
          const layoutItem = LAYOUT_MAP.find(
            (gridItem) => gridItem.i === item.i
          );
          const Widget: FC | undefined = layoutItem?.component;

          return (
            <div key={item.i}>{Widget && item?.visible && <Widget />}</div>
          );
        })}
      </GridLayout>
    </S.Dashboard>
  );
};
