import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/UseSelectUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const {onSelectUser, selectedUser} = useSelectUser(); 
  //最初の１回だけユーザー情報を取得する。useEffectを使わないとgetUsers、描画、再レンダリングのループになる
  useEffect(() => getUsers(),[getUsers])
  //useCallbackの第二引数を[]にするとユーザー カードをクリックしても情報がinputに入らない。関数読み込み時はusersが[]のため
  //users,onOpen,onSelectUserの値が変化した再読み込みさせる
  const onClickUser = useCallback((id: number) => {
    onSelectUser({id: id, users: users, onOpen: onOpen});
  }, [onSelectUser,users,onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} mx="auto">
          {users.map(user => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
})