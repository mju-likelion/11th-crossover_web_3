import React from 'react';
import ShortBtn from "../components/ShortBtn";
import styled from "styled-components";
import DummmyData from "../asset/data/PostDummyData.json"
import MAX_TITLE from "./Post";
import MAX_CONTENT from "./Post";
import {useParams} from "react-router-dom";


const Content = () => {
    const {postId} = useParams()

    const title = DummmyData.contents[postId-1].title;
    const content = DummmyData.contents[postId-1].content;
    const isMine = DummmyData.contents[postId-1].mine;


    return (
        <>
            <Container>
                <InputBox height={"134px"}>
                    <TitleEl>
                        <TitleTxt>제목 :</TitleTxt>
                        <Title>{title}</Title>
                        <TextLimit>( {title.length} / {MAX_TITLE} )</TextLimit>
                    </TitleEl>
                </InputBox>
                <InputBox height={"751px"}>
                    <TextArea>{content}</TextArea>
                    <PostLimit>
                        <TextLimit>( {content.length} / {MAX_CONTENT} )</TextLimit>
                    </PostLimit>
                </InputBox>
                <Notice isMine={isMine}>
                    ※ 작성된 게시글은 수정이 불가합니다.
                </Notice>
                <Button isMine={isMine}>
                    <ShortBtn text={"삭제하기"} type={"D"}/>
                </Button>
            </Container>
        </>
    );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58px;
`
const InputBox = styled.div`
  width: 794px;
  height: ${(props) => props.height || "134px"};
  border: 2px solid GRAY;
  border-radius: 25px;
  padding: 55px 52px 51px 35px;
  margin-bottom: 16px;
`
const TitleEl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const TitleTxt = styled.div`
  font-size: 24px;
  font-weight: 600;
`
const Title = styled.div`
  width: 561px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  border: none;
`
const TextArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 20px;
`
const PostLimit = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -25px;
`
const TextLimit = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: GRAY;
`
const Notice = styled.div`
  width: 714px;
  margin-top: 16px;
  font-size: 20px;
  font-weight: 500;
  color: GRAY;
  visibility: ${(props) => props.isMine ? "visible" : "hidden"};
`
const Button = styled.div`
  margin-left: 497px;
  visibility: ${(props) => props.isMine ? "visible" : "hidden"};
`

export default Content;