import React, { FC, memo } from 'react';
import { Image } from '@chakra-ui/react';

export const PicsumImage: FC = memo(() => {
  return <Image src={"https://picsum.photos/200/300"} alt={"picsum"} borderRadius="full" boxSize="160px" m="auto"/>;
});
