export default function Google({className}: {className: string}) {
  return (
    // <svg viewBox="0 0 100 100" className={className}>
    //   <linearGradient
    //     id="b"
    //     x1="55.41"
    //     x2="12.11"
    //     y1="96.87"
    //     y2="21.87"
    //     gradientUnits="userSpaceOnUse"
    //   >
    //     <stop offset="0" stopColor="#1e8e3e" />
    //     <stop offset="1" stopColor="#34a853" />
    //   </linearGradient>
    //   <linearGradient
    //     id="c"
    //     x1="42.7"
    //     x2="86"
    //     y1="100"
    //     y2="25.13"
    //     gradientUnits="userSpaceOnUse"
    //   >
    //     <stop offset="0" stopColor="#fcc934" />
    //     <stop offset="1" stopColor="#fbbc04" />
    //   </linearGradient>
    //   <linearGradient
    //     id="a"
    //     x1="6.7"
    //     x2="93.29"
    //     y1="31.25"
    //     y2="31.25"
    //     gradientUnits="userSpaceOnUse"
    //   >
    //     <stop offset="0" stopColor="#d93025" />
    //     <stop offset="1" stopColor="#ea4335" />
    //   </linearGradient>
    //   <path fill="url(#a)" d="M93.29 25a50 50 90 0 0-86.6 0l3 54z" />
    //   <path fill="url(#b)" d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z" />
    //   <path fill="url(#c)" d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z" />
    //   <path fill="#fff" d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z" />
    //   <path
    //     fill="#1a73e8"
    //     d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z"
    //   />{' '}
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      className="h-5 w-5"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      ></path>
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      ></path>
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      ></path>
      <path d="M1 1h22v22H1z" fill="none"></path>
    </svg>
  );
}
