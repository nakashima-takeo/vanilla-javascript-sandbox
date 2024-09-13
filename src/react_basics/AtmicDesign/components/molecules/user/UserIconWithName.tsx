import React, { useContext } from "react";
import styled from "styled-components";
import { UnsplashImage } from "../../atoms/image/UnsplashImage";
import { UnsplashRandomImage } from "../../atoms/image/UnsplashRandomImage";
import { UserContext } from "../../../providers/UserProvider";

type Props = {
	name: string;
	imageId?: string;
};

export const UserIconWithName = (props: Props) => {
  const { userInfo } = useContext(UserContext)!;
	const { name, imageId } = props;
	return (
		<SContainer>
			{imageId ? (
				<UnsplashImage width="160px" height="160px" radius alt="プロフィール" imageId={imageId} />
			) : (
				<UnsplashRandomImage width="160px" height="160px" radius alt="プロフィール" />
			)}
			<SName>{name}</SName>
			{userInfo.isAdmin && <SEdit>編集</SEdit>}
		</SContainer>
	);
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	padding: 16px;
`;

const SName = styled.p`
	font-size: 18px;
	font-weight: bold;
	margin: 0;
	color: #333;
  padding-top: 10px;
`;

const SEdit = styled.span`
	text-decoration: underline;
	color: #aaa;
	cursor: pointer;
`;
