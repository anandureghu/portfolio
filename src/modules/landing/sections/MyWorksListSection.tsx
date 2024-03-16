import { ForwardedRef, forwardRef } from "react";
import "./MyWorksListSection.scss";

const MyWorksListSection = forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    console.log(props);
    return (
      <div className="myWorksList" ref={ref}>
        <div className="myWorksList__content">
          <div className="myWorksList__content--title">Featured Works</div>
        </div>
      </div>
    );
  }
);

export default MyWorksListSection;
