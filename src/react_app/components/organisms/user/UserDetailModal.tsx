import React, { FC } from "react"
import { Box, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react"
import { User } from "../../../types/api/user"
import { PrimaryButton } from "../../atoms/button/PrimaryButton"
import { useLoginUser } from "../../../hooks/useLoginUser"

type Props = {
  user?: User
  isOpen: boolean
  onClose: () => void
}

const onClickEdit = () => {
  console.log("edit")
}

export const UserDetailModal: FC<Props> = (props) => {
  const { loginUser } = useLoginUser()
  const { user, isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>
          ユーザー詳細
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>
                名前
              </FormLabel>
              <Input value={user?.name} isReadOnly={!loginUser?.isAdmin}/>
              <FormLabel>
                フルネーム
              </FormLabel>
              <Input value={user?.username} isReadOnly={!loginUser?.isAdmin}/>
              <FormLabel>
                E-MAIL
              </FormLabel>
              <Input value={user?.email} isReadOnly={!loginUser?.isAdmin}/>
              <FormLabel>
                電話番号
              </FormLabel>
              <Input value={user?.phone} isReadOnly={!loginUser?.isAdmin}/>
            </FormControl>
          </Stack>
          {loginUser?.isAdmin && (
            <Box textAlign="right" pt={6}>
              <PrimaryButton onClick={onClickEdit}>編集</PrimaryButton>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
