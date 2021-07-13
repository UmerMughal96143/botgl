import React from "react";

const UserSidebar = () => {
  return (
    <>
      {/* <!------------------ Side Nav -------------------> */}
      <div className="sidenav" id="mySidebar">
        {/* <!-- Main logo --> */}
        <button
          className="btn sidenav-close-btn d-block d-sm-block d-md-block d-lg-none d-xl-none"
          onClick="sidenav_hide()"
        >
          &times;
        </button>
        <a href="home.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5241 9.75272C20.885 5.81932 17.5441 2.89308 13.5608 2.77789C13.3714 2.77047 13.1868 2.83866 13.0477 2.96743C12.9086 3.0962 12.8265 3.27499 12.8193 3.46439V3.46439V3.52846L13.2678 10.2378C13.2973 10.6895 13.6856 11.0328 14.1374 11.0067L20.8651 10.5582C21.0547 10.5442 21.2308 10.4552 21.3545 10.3108C21.4782 10.1665 21.5393 9.97882 21.5241 9.78933V9.75272Z"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.90151 6.76877C9.32947 6.66978 9.76741 6.88875 9.94499 7.29051C9.9915 7.385 10.0195 7.48754 10.0274 7.59257C10.1189 8.89234 10.3111 11.739 10.421 13.2768C10.4397 13.5538 10.5681 13.8119 10.7777 13.994C10.9872 14.1761 11.2608 14.2671 11.5377 14.247V14.247L17.1853 13.8992C17.4374 13.884 17.6846 13.9738 17.8683 14.1471C18.052 14.3204 18.156 14.562 18.1555 14.8145V14.8145C17.9266 18.2249 15.4764 21.0759 12.1392 21.815C8.80201 22.554 5.37718 21.0039 3.72988 18.009C3.23813 17.1471 2.92672 16.1941 2.81455 15.2081C2.7666 14.9055 2.74821 14.599 2.75963 14.2928C2.76935 10.6508 5.32714 7.51273 8.89236 6.76877"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Dashboard
        </a>
        <a href="runtrade.html" className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 21V16"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 16H23"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 21V14"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 14H7"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21V12"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 8H15"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 12V3"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V3"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 10V3"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          Run Trade
        </a>
        <a href="my-trades.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 18H21"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H3.01"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12H21"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H3.01"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 6H21"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H3.01"
              stroke="#9B9B9B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          My Trades
        </a>
        <a href="my-bot.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V6C3 6.53043 3.21071 7.03914 3.58579 7.41421C3.96086 7.78929 4.46957 8 5 8V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V8C19.5304 8 20.0391 7.78929 20.4142 7.41421C20.7893 7.03914 21 6.53043 21 6V4C21 3.46957 20.7893 2.96086 20.4142 2.58579C20.0391 2.21071 19.5304 2 19 2ZM17 16H11V12H17V16ZM17 10H10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18H17V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V8H17V10ZM5 6V4H19V6H5Z"
              fill="#9B9B9B"
            />
          </svg>
          My BOT
        </a>
        <a href="refferal-link.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 10.5H20V9.5C20 9.23478 19.8946 8.98043 19.7071 8.79289C19.5196 8.60536 19.2652 8.5 19 8.5C18.7348 8.5 18.4804 8.60536 18.2929 8.79289C18.1054 8.98043 18 9.23478 18 9.5V10.5H17C16.7348 10.5 16.4804 10.6054 16.2929 10.7929C16.1054 10.9804 16 11.2348 16 11.5C16 11.7652 16.1054 12.0196 16.2929 12.2071C16.4804 12.3946 16.7348 12.5 17 12.5H18V13.5C18 13.7652 18.1054 14.0196 18.2929 14.2071C18.4804 14.3946 18.7348 14.5 19 14.5C19.2652 14.5 19.5196 14.3946 19.7071 14.2071C19.8946 14.0196 20 13.7652 20 13.5V12.5H21C21.2652 12.5 21.5196 12.3946 21.7071 12.2071C21.8946 12.0196 22 11.7652 22 11.5C22 11.2348 21.8946 10.9804 21.7071 10.7929C21.5196 10.6054 21.2652 10.5 21 10.5ZM13.3 12.22C13.8336 11.7581 14.2616 11.1869 14.5549 10.545C14.8482 9.90316 15 9.20571 15 8.5C15 7.17392 14.4732 5.90215 13.5355 4.96447C12.5979 4.02678 11.3261 3.5 10 3.5C8.67392 3.5 7.40215 4.02678 6.46447 4.96447C5.52678 5.90215 5 7.17392 5 8.5C4.99999 9.20571 5.1518 9.90316 5.44513 10.545C5.73845 11.1869 6.16642 11.7581 6.7 12.22C5.30014 12.8539 4.11247 13.8775 3.27898 15.1685C2.4455 16.4596 2.00147 17.9633 2 19.5C2 19.7652 2.10536 20.0196 2.29289 20.2071C2.48043 20.3946 2.73478 20.5 3 20.5C3.26522 20.5 3.51957 20.3946 3.70711 20.2071C3.89464 20.0196 4 19.7652 4 19.5C4 17.9087 4.63214 16.3826 5.75736 15.2574C6.88258 14.1321 8.4087 13.5 10 13.5C11.5913 13.5 13.1174 14.1321 14.2426 15.2574C15.3679 16.3826 16 17.9087 16 19.5C16 19.7652 16.1054 20.0196 16.2929 20.2071C16.4804 20.3946 16.7348 20.5 17 20.5C17.2652 20.5 17.5196 20.3946 17.7071 20.2071C17.8946 20.0196 18 19.7652 18 19.5C17.9985 17.9633 17.5545 16.4596 16.721 15.1685C15.8875 13.8775 14.6999 12.8539 13.3 12.22ZM10 11.5C9.40666 11.5 8.82664 11.3241 8.33329 10.9944C7.83994 10.6648 7.45542 10.1962 7.22836 9.64805C7.0013 9.09987 6.94189 8.49667 7.05764 7.91473C7.1734 7.33279 7.45912 6.79824 7.87868 6.37868C8.29824 5.95912 8.83279 5.6734 9.41473 5.55764C9.99667 5.44189 10.5999 5.5013 11.1481 5.72836C11.6962 5.95542 12.1648 6.33994 12.4944 6.83329C12.8241 7.32664 13 7.90666 13 8.5C13 9.29565 12.6839 10.0587 12.1213 10.6213C11.5587 11.1839 10.7956 11.5 10 11.5Z"
              fill="#9B9B9B"
            />
          </svg>
          Refferal Program
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 7H18V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7ZM5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5ZM20 15H19C18.7348 15 18.4804 14.8946 18.2929 14.7071C18.1054 14.5196 18 14.2652 18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1054 18.7348 13 19 13H20V15ZM20 11H19C18.2044 11 17.4413 11.3161 16.8787 11.8787C16.3161 12.4413 16 13.2044 16 14C16 14.7956 16.3161 15.5587 16.8787 16.1213C17.4413 16.6839 18.2044 17 19 17H20V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V8.83C4.32127 8.94302 4.65943 9.00051 5 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V11Z"
              fill="#9B9B9B"
            />
          </svg>{" "}
          My Wallet
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="13"
            viewBox="0 0 21 13"
            fill="none"
          >
            <path
              d="M20.9199 0.62C20.8185 0.375651 20.6243 0.181475 20.3799 0.0799999C20.2597 0.028759 20.1306 0.00157999 19.9999 0H14.9999C14.7347 0 14.4804 0.105357 14.2928 0.292893C14.1053 0.48043 13.9999 0.734784 13.9999 1C13.9999 1.26522 14.1053 1.51957 14.2928 1.70711C14.4804 1.89464 14.7347 2 14.9999 2H17.5899L11.9999 7.59L8.70994 4.29C8.61698 4.19627 8.50637 4.12188 8.38452 4.07111C8.26266 4.02034 8.13195 3.9942 7.99994 3.9942C7.86793 3.9942 7.73722 4.02034 7.61536 4.07111C7.4935 4.12188 7.3829 4.19627 7.28994 4.29L1.28994 10.29C1.19621 10.383 1.12182 10.4936 1.07105 10.6154C1.02028 10.7373 0.994141 10.868 0.994141 11C0.994141 11.132 1.02028 11.2627 1.07105 11.3846C1.12182 11.5064 1.19621 11.617 1.28994 11.71C1.3829 11.8037 1.4935 11.8781 1.61536 11.9289C1.73722 11.9797 1.86793 12.0058 1.99994 12.0058C2.13195 12.0058 2.26266 11.9797 2.38452 11.9289C2.50637 11.8781 2.61698 11.8037 2.70994 11.71L7.99994 6.41L11.2899 9.71C11.3829 9.80373 11.4935 9.87812 11.6154 9.92889C11.7372 9.97966 11.8679 10.0058 11.9999 10.0058C12.132 10.0058 12.2627 9.97966 12.3845 9.92889C12.5064 9.87812 12.617 9.80373 12.7099 9.71L18.9999 3.41V6C18.9999 6.26522 19.1053 6.51957 19.2928 6.70711C19.4804 6.89464 19.7347 7 19.9999 7C20.2652 7 20.5195 6.89464 20.707 6.70711C20.8946 6.51957 20.9999 6.26522 20.9999 6V1C20.9984 0.869323 20.9712 0.740222 20.9199 0.62Z"
              fill="#9B9B9B"
            />
          </svg>
          Financial Activities
        </a>
        <a href="withdrawals.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 15H10C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H7C6.73478 13 6.48043 13.1054 6.29289 13.2929C6.10536 13.4804 6 13.7348 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM19 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V11H20V17ZM20 9H4V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V9Z"
              fill="#9B9B9B"
            />
          </svg>
          Withdrawals
        </a>
        <a href="transfers.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.91 15.51H15.38C15.1148 15.51 14.8604 15.6154 14.6729 15.8029C14.4854 15.9904 14.38 16.2448 14.38 16.51C14.38 16.7752 14.4854 17.0296 14.6729 17.2171C14.8604 17.4046 15.1148 17.51 15.38 17.51H17.78C16.6769 18.6627 15.2544 19.4593 13.6952 19.7974C12.1359 20.1355 10.5112 19.9996 9.02978 19.4072C7.54834 18.8149 6.27787 17.7931 5.38159 16.4732C4.48531 15.1532 4.00418 13.5955 4 12C4 11.7348 3.89464 11.4804 3.70711 11.2929C3.51957 11.1054 3.26522 11 3 11C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2.00529 13.9528 2.58222 15.8613 3.6596 17.49C4.73699 19.1187 6.26767 20.3964 8.06274 21.1652C9.85782 21.9341 11.8387 22.1605 13.761 21.8166C15.6833 21.4727 17.4628 20.5735 18.88 19.23V21C18.88 21.2652 18.9854 21.5196 19.1729 21.7071C19.3604 21.8946 19.6148 22 19.88 22C20.1452 22 20.3996 21.8946 20.5871 21.7071C20.7746 21.5196 20.88 21.2652 20.88 21V16.5C20.8775 16.2416 20.7752 15.9943 20.5943 15.8097C20.4135 15.6251 20.1683 15.5177 19.91 15.51ZM12 2C9.43639 2.00731 6.97349 2.99891 5.12 4.77V3C5.12 2.73478 5.01464 2.48043 4.82711 2.29289C4.63957 2.10536 4.38522 2 4.12 2C3.85478 2 3.60043 2.10536 3.41289 2.29289C3.22536 2.48043 3.12 2.73478 3.12 3V7.5C3.12 7.76522 3.22536 8.01957 3.41289 8.20711C3.60043 8.39464 3.85478 8.5 4.12 8.5H8.62C8.88522 8.5 9.13957 8.39464 9.32711 8.20711C9.51464 8.01957 9.62 7.76522 9.62 7.5C9.62 7.23478 9.51464 6.98043 9.32711 6.79289C9.13957 6.60536 8.88522 6.5 8.62 6.5H6.22C7.32247 5.34787 8.74409 4.5515 10.3024 4.21311C11.8607 3.87472 13.4846 4.00975 14.9656 4.60086C16.4466 5.19198 17.7172 6.21221 18.6142 7.5306C19.5113 8.849 19.9938 10.4054 20 12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill="#9B9B9B"
            />
          </svg>
          Transfers
        </a>
        <button className="btn account-btn custom-btn d-block d-sm-block d-md-block d-lg-none d-xl-none">
          My Account
        </button>
        <a href="#" className="btn custom-btn mt-3">
          <i className="fal fa-info-circle"></i>You have a new message{" "}
          <i className="far fa-times cross-icon"></i>
        </a>
      </div>
      {/* <!------------------ Side Nav ------------------->    */}
    </>
  );
};

export default UserSidebar;