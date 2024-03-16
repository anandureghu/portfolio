import "./MyWorksSection.scss";

interface IWorksSectionProps {
  scrollToMyWorksList: () => void;
}

const MyWorksSection: React.FC<IWorksSectionProps> = ({
  scrollToMyWorksList,
}) => {
  return (
    <div className="works">
      <div className="works__content">
        <div className="works__content--title">MY WORKS</div>
        <div className="works__content--details">
          This is the result of my work as long as I explore the world of
          photography.
        </div>
        <div
          className="works__content--more bounce-top"
          onClick={scrollToMyWorksList}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 14.462l3.077-3.077H8.923zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MyWorksSection;