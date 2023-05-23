import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path d="M36 12c13.255 0 24 10.745 24 24 0 10.656-6.948 19.685-16.559 22.818l.007-.022s-1.62-.759-1.586-2.114c.038-1.491 0-4.971 0-6.248 0-2.193-1.388-3.747-1.388-3.747s10.884.122 10.884-11.491c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-.426-6.812c-1.856-.2-5.18 1.774-6.6 2.697 0 0-2.25-.922-5.991-.922-3.742 0-5.991.922-5.991.922-1.419-.922-4.744-2.897-6.6-2.697-1.656 2.029-.426 6.812-.426 6.812s-2.342 2.332-2.342 6.812c0 11.613 10.884 11.491 10.884 11.491s-1.097 1.239-1.336 3.061c-.76.258-1.877.576-2.78.576-2.362 0-4.159-2.296-4.817-3.358-.649-1.048-1.98-1.927-3.221-1.927-.817 0-1.216.409-1.216.876s1.146.793 1.902 1.659c1.594 1.826 1.565 5.933 7.245 5.933.617 0 1.876-.152 2.823-.279-.006 1.293-.007 2.657.013 3.454.034 1.355-1.586 2.114-1.586 2.114l.007.022C18.948 55.685 12 46.656 12 36c0-13.255 10.745-24 24-24z" />
  </svg>
);

export const FacebookIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 42 42"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#3F51B5"
      d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"
    />
    <path
      fill="#FFF"
      d="M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z"
    />
  </svg>
);

export const Insta = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 42 42"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <radialGradient
      id="a"
      cx={19.38}
      cy={42.035}
      r={44.899}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fd5" />
      <stop offset={0.328} stopColor="#ff543f" />
      <stop offset={0.348} stopColor="#fc5245" />
      <stop offset={0.504} stopColor="#e64771" />
      <stop offset={0.643} stopColor="#d53e91" />
      <stop offset={0.761} stopColor="#cc39a4" />
      <stop offset={0.841} stopColor="#c837ab" />
    </radialGradient>
    <path
      fill="url(#a)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <radialGradient
      id="b"
      cx={11.786}
      cy={5.54}
      r={29.813}
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4168c9" />
      <stop offset={0.999} stopColor="#4168c9" stopOpacity={0} />
    </radialGradient>
    <path
      fill="url(#b)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <path
      fill="#fff"
      d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
    />
    <circle cx={31.5} cy={16.5} r={1.5} fill="#fff" />
    <path
      fill="#fff"
      d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </svg>
);
