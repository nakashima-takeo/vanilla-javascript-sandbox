import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const { setUserInfo } = useContext(UserContext)!;
	const navigate = useNavigate();
	const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/atmic-design/users");
  }
	const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/atmic-design/users");
  }
  // providerからuserを受け取る
	return (
		<SContainer>
			<h2>Topページです</h2>
			<SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
			<br />
			<br />
			<SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
		</SContainer>
	);
};

const SContainer = styled.div`
	text-align: center;
	padding: 16px;
`;