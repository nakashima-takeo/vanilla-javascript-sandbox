import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react"
import React, { FC } from "react"

type Props = {
  isOpen: boolean
  onClose: () => void
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
  onClickLogin: () => void
}

export const MenuDrawer: FC<Props> = (props) => {
  const { isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting, onClickLogin } = props
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
            <Button w="100%" onClick={onClickLogin}>ログイン</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

