import React from "react";
import { distanceInWords } from "date-fns";
import styled from "styled-components";

const MetaInfoWrapper = styled.div`
  border: solid 1px #bcb6ff;
`;

export default function CommentMetaInfo(props) {
  const author = props.author;
  const createdAt = props.createdAt;
  const dateCreated = `${distanceInWords(createdAt, new Date())} ago`;

  return (
    <MetaInfoWrapper>
      <p>By: {author}</p>
      <p>{dateCreated}</p>
    </MetaInfoWrapper>
  );
}