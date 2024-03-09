import React from 'react';

export const Title = ({
  text,
  size = 'h1',
  styles,
}: {
  text: string;
  size?: string;
  styles: string;
}) => {
  const TitleTag = size as keyof JSX.IntrinsicElements;

  return (
    <TitleTag className={styles} key={text}>
      {text}
    </TitleTag>
  );
};
