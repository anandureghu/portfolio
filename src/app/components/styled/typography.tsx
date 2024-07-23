import tw from "tailwind-styled-components";

export const Title = tw.h1`
    text-4xl text-white
    font-bold
    flex items-center gap-3 justify-center
`;

export const HighlightedTitle = tw(Title)`
  text-violet-500
`;

export const Body = tw.p`
  text-violet-100 text-lg leading-7 tracking-wider font-light
`;
