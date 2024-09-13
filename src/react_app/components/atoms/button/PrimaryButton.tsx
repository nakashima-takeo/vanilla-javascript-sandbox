import { Button } from "@chakra-ui/react";
import React, { FC, memo, ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { onClick, children, disabled = false, loading = false } = props;
  return (
    <Button bg="teal.400" color="white" isDisabled={disabled} isLoading={loading} _hover={{ opacity: 0.8}} onClick={onClick}>
      {children}
    </Button>
  )
});
