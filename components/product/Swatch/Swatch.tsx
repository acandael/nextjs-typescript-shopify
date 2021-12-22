import React, { FC } from 'react';
import { Check } from '@components/icons';
import s from './Swatch.module.css';
import cn from 'classnames';
import { isDark } from '@lib/color';

interface Props {
  color?: string;
  label?: string;
  active: boolean;
  variant?: 'size' | 'color' | string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, active, variant, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === 'size',
    [s.dark]: color && isDark(color),
  });
  return (
    <button
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === 'size' ? label : null}
    </button>
  );
};

export default Swatch;
