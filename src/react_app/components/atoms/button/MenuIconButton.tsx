import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

type Props = {
  onOpen: () => void
}

export const MenuIconButton: FC<Props> = memo(({ onOpen }) => {
  return (
    <IconButton aria-label="menu" icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{base: "block", md: "none" }} onClick={onOpen} />
  )
})
