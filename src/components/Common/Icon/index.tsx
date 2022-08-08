// Dependencies
import React, { FC } from 'react';
import IcomoonReact from 'icomoon-react';

// Icon set
import iconSet from '../../../assets/icomoon/selection.json';

// Interface
export interface IIconProps {
  /** The name of the Icon */
  name: string;
  /** The color of the Icon */
  color?: string;
  /** The size of the Icon */
  size?: number;
}

// Export Icon component
export const Icon: FC<IIconProps> = ({ color, size = 20, name }) => (
  <IcomoonReact iconSet={iconSet} color={color} size={size} icon={name} />
);
