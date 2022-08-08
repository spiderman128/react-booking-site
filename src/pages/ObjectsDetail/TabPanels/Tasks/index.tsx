// Dependencies
import { FC } from 'react';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

// Components
import { Checkbox, Icon, Typography } from '../../../../components';

// Constants
const tasks = [
  {
    tasks: {
      name: 'Indicative offer / Power of attorney prepared',
      subtasks: [
        {
          name: 'Recorded in investor reporting list',
          broker: '',
          createdAt: '07.12.2021 | 09.23',
        },
        {
          name: 'Equipment standard determind',
          broker: '',
          createdAt: '07.12.2021 | 09.23',
        },
        {
          name: 'Lora assessment performed',
          broker: '',
          createdAt: '07.12.2021 | 09.23',
        },
        {
          name: 'Purchase yield calculated',
          broker: '',
          createdAt: '07.12.2021 | 09.23',
        },
      ],
    },
    broker: '',
    createdAt: '06.12.2021 | 16:21',
  },
  {
    tasks: {
      name: 'Indicative offer sent',
    },
    broker: '',
    createdAt: '20.12.2021 | 06:39',
  },
];

// Export Tasks panel
export const TasksPanel: FC = () => {
  // Get translation from hook
  const { t } = useTranslation();

  // Return Tasks panel
  return (
    <>
      <Typography variant="h3">{t('objects_detail.tasks')}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>{t('objects_detail.tasks')}</TableCell>
            <TableCell>{t('objects_detail.broker')}</TableCell>
            <TableCell>{t('objects_detail.date_and_time')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(({ tasks, broker, createdAt }, index) => (
            <>
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell colSpan={2}>{tasks.name}</TableCell>
                <TableCell>
                  <Avatar
                    src={broker}
                    sx={{ width: 32, height: 32, borderRadius: 2 }}
                  >
                    <Icon name="image-fill" />
                  </Avatar>
                </TableCell>
                <TableCell>{createdAt}</TableCell>
              </TableRow>
              {tasks.subtasks?.map(() => (
                <TableRow key={index}>
                  <TableCell />
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{tasks.name}</TableCell>
                  <TableCell>
                    <Avatar
                      src={broker}
                      sx={{ width: 32, height: 32, borderRadius: 2 }}
                    >
                      <Icon name="image-fill" />
                    </Avatar>
                  </TableCell>
                  <TableCell>{createdAt}</TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
