import { ButtonProps } from '@/shared/api/common/button';
import cn from 'classnames';

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    color = 'primary',
    size = 'sm',
    variant,
    className,
    ...other
  } = props;

  const classes = cn(
    {
      button: true,
      [`button--${color}`]: color && !variant,
      [`button--${variant}-${color}`]: color && variant,
      [`button--${size}`]: size,
    },
    className,
  );

  return <button className={classes} type={type} {...other} />;
}