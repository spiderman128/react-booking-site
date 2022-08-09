// Dependencies
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { Card } from '../../../../components';

// Styles
import * as S from './styles';

// Export refund-requests widget
export const RefundRequestsWidget: FC = () => {
  const { t } = useTranslation();

  // Return refund-requests widget
  return (
    <Card
      title={t('dashboard.refund_requests')}
      titleColor="#FFBC99"
    >
      <div className='d-flex mt-3'>
        <div>
          <img src={`/assets/images/dashboard/refund-icon.svg`} width={48} height={48} alt="refund-icon" />
        </div>
        <div className='ms-2'>
          You have <strong>52 open refund requests</strong> to action. This includes <strong>8 new requests</strong>. 👀
        </div>
      </div>
      <S.BlockButton>
        Review refund requests
      </S.BlockButton>
    </Card>
  );
};
