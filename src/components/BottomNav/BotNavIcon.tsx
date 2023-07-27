import styled from "styled-components";

const SVGLayout = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const HomeIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.2985 3.69056L4.29848 10.5812C4.10753 10.7691 4 11.0259 4 11.2938V20C4 20.5523 4.44772 21 5 21H8.71429C9.26657 21 9.71429 20.5523 9.71429 20V15.25C9.71429 14.6977 10.162 14.25 10.7143 14.25H13.2857C13.838 14.25 14.2857 14.6977 14.2857 15.25V20C14.2857 20.5523 14.7334 21 15.2857 21H19C19.5523 21 20 20.5523 20 20V11.2938C20 11.0259 19.8925 10.7692 19.7015 10.5812L12.7015 3.69056C12.3123 3.30743 11.6877 3.30743 11.2985 3.69056Z"
          fill="#C9C5C5"
        />
      </svg>
    </SVGLayout>
  );
};

export const HomeFocusedIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.2985 3.69056L4.29848 10.5812C4.10753 10.7691 4 11.0259 4 11.2938V20C4 20.5523 4.44772 21 5 21H8.71429C9.26657 21 9.71429 20.5523 9.71429 20V15.25C9.71429 14.6977 10.162 14.25 10.7143 14.25H13.2857C13.838 14.25 14.2857 14.6977 14.2857 15.25V20C14.2857 20.5523 14.7334 21 15.2857 21H19C19.5523 21 20 20.5523 20 20V11.2938C20 11.0259 19.8925 10.7692 19.7015 10.5812L12.7015 3.69056C12.3123 3.30743 11.6877 3.30743 11.2985 3.69056Z"
          fill="#2F2A28"
        />
      </svg>
    </SVGLayout>
  );
};

export const ChatIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V12C20 16.4183 16.4183 20 12 20H4.61539C4.27552 20 4 19.7245 4 19.3846V12Z"
          fill="#C9C5C5"
        />
      </svg>
    </SVGLayout>
  );
};

export const ChatFocusedIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V12C20 16.4183 16.4183 20 12 20H4.61539C4.27552 20 4 19.7245 4 19.3846V12Z"
          fill="#2F2A28"
        />
      </svg>
    </SVGLayout>
  );
};

export const ChatAlertIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V12C20 16.4183 16.4183 20 12 20H4.61539C4.27552 20 4 19.7245 4 19.3846V12Z"
          fill="#C9C5C5"
        />
        <circle cx="18" cy="6" r="4" fill="#FF7152" stroke="white" />
      </svg>
    </SVGLayout>
  );
};

export const ChatFocusedAlertIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V12C20 16.4183 16.4183 20 12 20H4.61539C4.27552 20 4 19.7245 4 19.3846V12Z"
          fill="#2F2A28"
        />
        <circle cx="18" cy="6" r="4" fill="#FF7152" stroke="white" />
      </svg>
    </SVGLayout>
  );
};

export const ProfileIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="7" r="4.5" fill="#C9C5C5" />
        <path
          d="M18.5001 21C19.0524 21 19.5062 20.5508 19.4415 20.0023C19.3581 19.2945 19.1862 18.6003 18.9292 17.9385C18.5523 16.9679 17.9998 16.086 17.3034 15.3431C16.6069 14.6003 15.7802 14.011 14.8702 13.609C13.9603 13.2069 12.985 13 12.0001 13C11.0152 13 10.0399 13.2069 9.12996 13.609C8.22002 14.011 7.39322 14.6003 6.69678 15.3431C6.00034 16.086 5.4479 16.9679 5.07099 17.9385C4.814 18.6003 4.64204 19.2945 4.55864 20.0023C4.49401 20.5508 4.9478 21 5.50008 21L18.5001 21Z"
          fill="#C9C5C5"
        />
      </svg>
    </SVGLayout>
  );
};

export const ProfileFocusedIcon = () => {
  return (
    <SVGLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="7" r="4.5" fill="#2F2A28" />
        <path
          d="M18.5001 21C19.0524 21 19.5062 20.5508 19.4415 20.0023C19.3581 19.2945 19.1862 18.6003 18.9292 17.9385C18.5523 16.9679 17.9998 16.086 17.3034 15.3431C16.6069 14.6003 15.7802 14.011 14.8702 13.609C13.9603 13.2069 12.985 13 12.0001 13C11.0152 13 10.0399 13.2069 9.12996 13.609C8.22002 14.011 7.39322 14.6003 6.69678 15.3431C6.00034 16.086 5.4479 16.9679 5.07099 17.9385C4.814 18.6003 4.64204 19.2945 4.55864 20.0023C4.49401 20.5508 4.9478 21 5.50008 21L18.5001 21Z"
          fill="#2F2A28"
        />
      </svg>
    </SVGLayout>
  );
};