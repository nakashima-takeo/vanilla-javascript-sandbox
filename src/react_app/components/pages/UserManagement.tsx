import { Center, Spinner, useDisclosure, Wrap, WrapItem, Text } from '@chakra-ui/react';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { User } from '../../types/api/user';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: FC = memo(() => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginUser } = useLoginUser();

  const onClickUser = useCallback((userId: number) => {
    setSelectedUser(users.find((user) => user.id === userId));
    onOpen()
  }, [users]);

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      { loading ? (
        <Center h="100vh">
          <Spinner />
          <Text>
            {loginUser?.name}さん、お待ちください
          </Text>
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard key={user.id} id={user.id} name={user.name} alphabetName={user.name.slice(0, 2)} onClick={onClickUser} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
})
