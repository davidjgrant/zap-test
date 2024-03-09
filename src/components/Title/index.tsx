import React from 'react';

export const Title = ({
  text,
  size = 'h1',
}: {
  text: string;
  size?: string;
}) => {
  const TitleTag = size as keyof JSX.IntrinsicElements;

  return <TitleTag key={text}>{text}</TitleTag>;
};
