import { MyTopBar } from "./TopBar1";
import { Back } from "./TopBar2";

export const TopBar3 = () => {
  return (
    <MyTopBar>
      <Back>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11 5L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L11 19M4.5 12H18.5"
            stroke="#2F2A28"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </Back>
    </MyTopBar>
  );
};
