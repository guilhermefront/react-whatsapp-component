import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  createElement,
} from 'react';
import './styles.css';

export type Anchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: 'a';
};

export type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

export type WhatsAppProps = (Anchor | Button) & {
  phone: number | string;
  text: string;
  className?: string;
};

export const WhatsApp = ({
  phone,
  text = '',
  className,
  as = 'a',
  ...props
}: WhatsAppProps) => {
  const phoneNumber =
    typeof phone === 'string' ? phone.replace(/\D/g, '') : phone;

  const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

  return createElement(
    as,
    {
      ...(as === 'a'
        ? {
            href: link,
          }
        : as === 'button'
        ? {
            onClick: () => {
              window.location.href = link;
            },
          }
        : null),
      className: `whatsapp ${className || ''}`,
      ...props,
    },
    createElement('span', { className: 'whatsapp__screen-readers' }, 'whatsapp')
  );
};
