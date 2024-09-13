import React, { useEffect, useState } from "react";
import styled from "styled-components";

type unsplashResponse = {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
}

type Props = {
  width?: string;
  height?: string;
  radius?: boolean;
  alt: string;
}

export const UnsplashRandomImage = (props: Props) => {
  const { width, height, radius } = props;
  const [image, setImage] = useState({} as unsplashResponse);
  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID ' + import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
      }
    }).then((response) => {
      console.log(response);
      if(!response.ok) {
        throw new Error('failed to fetch image');
      }
      return response.json();
    }).then((response) => {
      console.log(response);
      setImage(response as unsplashResponse);
    });
  }, []);
  return (
    <>
      { radius ?
        <SImage width={width} height={height} alt={props.alt} src={image.urls?.small} />
        :
        <img width={width} height={height} alt={props.alt} src={image.urls?.small} />
      }
    </>
  )
};

const SImage = styled.img`
  border-radius: 50%;
`;
