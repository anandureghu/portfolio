import { ForwardedRef, forwardRef } from "react";

const MyWorksListSection = forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return <div ref={ref}>MyWorksListSection</div>;
  }
);

export default MyWorksListSection;
