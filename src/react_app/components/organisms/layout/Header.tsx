import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { memo, FC, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/"), []);
  const onClickUserManagement = useCallback(() => navigate("/user_management"), []);
  const onClickSetting = useCallback(() => navigate("/setting"), []);
  const onClickLogin = useCallback(() => navigate("/login"), []);

  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5}}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex"}}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement} to="/user_management">ユーザー一覧</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickSetting} to="/setting">設定</Link>
          </Box>
          <Box>
            <Link onClick={onClickLogin} to="/login">ログイン</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting} onClickLogin={onClickLogin}/>
    </>
	);
});
