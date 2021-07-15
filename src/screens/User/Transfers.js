import React from "react";

const Transfers = () => {
  return (
    <>
      <div className="main transfers">
        <div className="container-fluid">
          <div className="row body-area">
            <div className="col-md-12 col-lg-12 col-xl-4 box-margin">
              <div className="box user-profile">
                <div className="table-title">
                  <div className="row">
                    <div className="col">
                      <h2 className="mb-4">User profile</h2>
                    </div>
                    <div className="col text-right">
                      <span className="danger">Inactive</span>
                    </div>
                  </div>
                  <div className="row p-0 username">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        User name:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>Rashid_michia123</span>
                    </div>
                  </div>
                  <div className="row full-name">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Full name:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>Rashid Michia</span>
                    </div>
                  </div>
                  <div className="row email-adress">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Email adress:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>email@gmail.com</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        ID number:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>555-345-342</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Phone number:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>+92 343 24 43</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Date of birthday:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>February 18, 1984</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Zip/Postal code:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>12422</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Street adress:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>Ashwood lane, 123</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Neighborhood:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>Ashwood lane, 123</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        City:
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>New York</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col">
                      <label for="" className="theme-accent">
                        Country
                      </label>
                    </div>
                    <div className="col-md-8 col">
                      <span>USA</span>
                    </div>
                  </div>
                  <div className="row  text-center p-0">
                    <div className="col">
                      <button className="btn custom-btn">Change information</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-4 box-margin">
              <div className="box validate-documents">
                <div className="table-title">
                  <h2>Validate documents (KYC)</h2>
                </div>
                <p>
                  Status:
                  <span className="danger">
                    Submit your documents to validate your account
                  </span>
                </p>
                <p>
                  To activate your account and be able to use our platform we
                  need you to send us the following information:
                </p>
                <div className="input-area">
                  <h2>Front Document:</h2>
                  <p>
                    Send us a photo or a scan of the front of your ID card that
                    clearly shows your information.
                  </p>
                  <div className="drag-area-wrap">
                    <div className="drag-area text-center">
                      <div className="document-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6673 3.33325H8.33398C7.0079 3.33325 5.73613 3.86004 4.79845 4.79772C3.86077 5.7354 3.33398 7.00717 3.33398 8.33325V31.6666C3.33398 32.9927 3.86077 34.2644 4.79845 35.2021C5.73613 36.1398 7.0079 36.6666 8.33398 36.6666H31.6673C31.9415 36.6628 32.2147 36.6349 32.484 36.5833L32.984 36.4666H33.1007H33.184L33.8007 36.2333L34.0173 36.1166C34.184 36.0166 34.3673 35.9333 34.534 35.8166C34.7565 35.6529 34.9681 35.4747 35.1673 35.2833L35.284 35.1333C35.4476 34.9674 35.5981 34.7891 35.734 34.5999L35.884 34.3833C36.0004 34.1977 36.1008 34.0025 36.184 33.7999C36.2297 33.72 36.2687 33.6363 36.3007 33.5499C36.384 33.3499 36.434 33.1333 36.5007 32.9166V32.6666C36.5951 32.3409 36.6511 32.0053 36.6673 31.6666V8.33325C36.6673 7.00717 36.1405 5.7354 35.2029 4.79772C34.2652 3.86004 32.9934 3.33325 31.6673 3.33325ZM8.33398 33.3333C7.89196 33.3333 7.46803 33.1577 7.15547 32.8451C6.84291 32.5325 6.66732 32.1086 6.66732 31.6666V24.4833L12.1507 18.9833C12.3056 18.827 12.4899 18.703 12.693 18.6184C12.8961 18.5338 13.114 18.4903 13.334 18.4903C13.554 18.4903 13.7718 18.5338 13.9749 18.6184C14.178 18.703 14.3624 18.827 14.5173 18.9833L28.8507 33.3333H8.33398ZM33.334 31.6666C33.3324 31.8721 33.2929 32.0755 33.2173 32.2666C33.1792 32.3478 33.1346 32.4259 33.084 32.4999C33.0394 32.5705 32.9892 32.6374 32.934 32.6999L24.0173 23.7833L25.484 22.3166C25.6389 22.1604 25.8233 22.0364 26.0264 21.9518C26.2295 21.8672 26.4473 21.8236 26.6673 21.8236C26.8873 21.8236 27.1052 21.8672 27.3083 21.9518C27.5114 22.0364 27.6957 22.1604 27.8507 22.3166L33.334 27.8166V31.6666ZM33.334 23.0999L30.2007 19.9999C29.2469 19.0949 27.9821 18.5904 26.6673 18.5904C25.3525 18.5904 24.0878 19.0949 23.134 19.9999L21.6673 21.4666L16.8673 16.6666C15.9135 15.7616 14.6488 15.2571 13.334 15.2571C12.0192 15.2571 10.7544 15.7616 9.80065 16.6666L6.66732 19.7666V8.33325C6.66732 7.89122 6.84291 7.4673 7.15547 7.15474C7.46803 6.84218 7.89196 6.66659 8.33398 6.66659H31.6673C32.1093 6.66659 32.5333 6.84218 32.8458 7.15474C33.1584 7.4673 33.334 7.89122 33.334 8.33325V23.0999Z"
                            fill="#DBDBDB"
                          />
                        </svg>
                        <header>
                          Drag and drop documents or{" "}
                          <label className="custom-file-upload theme-accent">
                            <input type="file" hidden />
                            Browse
                          </label>{" "}
                          to upload
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-area">
                  <h2>Back Document:</h2>
                  <p>
                    Send us a photo or scan of the back of your ID that is clear
                    and clearly shows your information.
                  </p>
                  <div className="drag-area-wrap">
                    <div className="drag-area text-center">
                      <div className="document-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6673 3.33325H8.33398C7.0079 3.33325 5.73613 3.86004 4.79845 4.79772C3.86077 5.7354 3.33398 7.00717 3.33398 8.33325V31.6666C3.33398 32.9927 3.86077 34.2644 4.79845 35.2021C5.73613 36.1398 7.0079 36.6666 8.33398 36.6666H31.6673C31.9415 36.6628 32.2147 36.6349 32.484 36.5833L32.984 36.4666H33.1007H33.184L33.8007 36.2333L34.0173 36.1166C34.184 36.0166 34.3673 35.9333 34.534 35.8166C34.7565 35.6529 34.9681 35.4747 35.1673 35.2833L35.284 35.1333C35.4476 34.9674 35.5981 34.7891 35.734 34.5999L35.884 34.3833C36.0004 34.1977 36.1008 34.0025 36.184 33.7999C36.2297 33.72 36.2687 33.6363 36.3007 33.5499C36.384 33.3499 36.434 33.1333 36.5007 32.9166V32.6666C36.5951 32.3409 36.6511 32.0053 36.6673 31.6666V8.33325C36.6673 7.00717 36.1405 5.7354 35.2029 4.79772C34.2652 3.86004 32.9934 3.33325 31.6673 3.33325ZM8.33398 33.3333C7.89196 33.3333 7.46803 33.1577 7.15547 32.8451C6.84291 32.5325 6.66732 32.1086 6.66732 31.6666V24.4833L12.1507 18.9833C12.3056 18.827 12.4899 18.703 12.693 18.6184C12.8961 18.5338 13.114 18.4903 13.334 18.4903C13.554 18.4903 13.7718 18.5338 13.9749 18.6184C14.178 18.703 14.3624 18.827 14.5173 18.9833L28.8507 33.3333H8.33398ZM33.334 31.6666C33.3324 31.8721 33.2929 32.0755 33.2173 32.2666C33.1792 32.3478 33.1346 32.4259 33.084 32.4999C33.0394 32.5705 32.9892 32.6374 32.934 32.6999L24.0173 23.7833L25.484 22.3166C25.6389 22.1604 25.8233 22.0364 26.0264 21.9518C26.2295 21.8672 26.4473 21.8236 26.6673 21.8236C26.8873 21.8236 27.1052 21.8672 27.3083 21.9518C27.5114 22.0364 27.6957 22.1604 27.8507 22.3166L33.334 27.8166V31.6666ZM33.334 23.0999L30.2007 19.9999C29.2469 19.0949 27.9821 18.5904 26.6673 18.5904C25.3525 18.5904 24.0878 19.0949 23.134 19.9999L21.6673 21.4666L16.8673 16.6666C15.9135 15.7616 14.6488 15.2571 13.334 15.2571C12.0192 15.2571 10.7544 15.7616 9.80065 16.6666L6.66732 19.7666V8.33325C6.66732 7.89122 6.84291 7.4673 7.15547 7.15474C7.46803 6.84218 7.89196 6.66659 8.33398 6.66659H31.6673C32.1093 6.66659 32.5333 6.84218 32.8458 7.15474C33.1584 7.4673 33.334 7.89122 33.334 8.33325V23.0999Z"
                            fill="#DBDBDB"
                          />
                        </svg>
                        <header>
                          Drag and drop documents or{" "}
                          <label className="custom-file-upload theme-accent">
                            <input type="file" hidden />
                            Browse
                          </label>{" "}
                          to upload
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-area">
                  <h2>Selfie:</h2>
                  <p>
                    Take a selfie of yourself holding your ID, we need your face
                    and ID to be clearly visible.
                  </p>
                  <div className="drag-area-wrap">
                    <div className="drag-area text-center">
                      <div className="document-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6673 3.33325H8.33398C7.0079 3.33325 5.73613 3.86004 4.79845 4.79772C3.86077 5.7354 3.33398 7.00717 3.33398 8.33325V31.6666C3.33398 32.9927 3.86077 34.2644 4.79845 35.2021C5.73613 36.1398 7.0079 36.6666 8.33398 36.6666H31.6673C31.9415 36.6628 32.2147 36.6349 32.484 36.5833L32.984 36.4666H33.1007H33.184L33.8007 36.2333L34.0173 36.1166C34.184 36.0166 34.3673 35.9333 34.534 35.8166C34.7565 35.6529 34.9681 35.4747 35.1673 35.2833L35.284 35.1333C35.4476 34.9674 35.5981 34.7891 35.734 34.5999L35.884 34.3833C36.0004 34.1977 36.1008 34.0025 36.184 33.7999C36.2297 33.72 36.2687 33.6363 36.3007 33.5499C36.384 33.3499 36.434 33.1333 36.5007 32.9166V32.6666C36.5951 32.3409 36.6511 32.0053 36.6673 31.6666V8.33325C36.6673 7.00717 36.1405 5.7354 35.2029 4.79772C34.2652 3.86004 32.9934 3.33325 31.6673 3.33325ZM8.33398 33.3333C7.89196 33.3333 7.46803 33.1577 7.15547 32.8451C6.84291 32.5325 6.66732 32.1086 6.66732 31.6666V24.4833L12.1507 18.9833C12.3056 18.827 12.4899 18.703 12.693 18.6184C12.8961 18.5338 13.114 18.4903 13.334 18.4903C13.554 18.4903 13.7718 18.5338 13.9749 18.6184C14.178 18.703 14.3624 18.827 14.5173 18.9833L28.8507 33.3333H8.33398ZM33.334 31.6666C33.3324 31.8721 33.2929 32.0755 33.2173 32.2666C33.1792 32.3478 33.1346 32.4259 33.084 32.4999C33.0394 32.5705 32.9892 32.6374 32.934 32.6999L24.0173 23.7833L25.484 22.3166C25.6389 22.1604 25.8233 22.0364 26.0264 21.9518C26.2295 21.8672 26.4473 21.8236 26.6673 21.8236C26.8873 21.8236 27.1052 21.8672 27.3083 21.9518C27.5114 22.0364 27.6957 22.1604 27.8507 22.3166L33.334 27.8166V31.6666ZM33.334 23.0999L30.2007 19.9999C29.2469 19.0949 27.9821 18.5904 26.6673 18.5904C25.3525 18.5904 24.0878 19.0949 23.134 19.9999L21.6673 21.4666L16.8673 16.6666C15.9135 15.7616 14.6488 15.2571 13.334 15.2571C12.0192 15.2571 10.7544 15.7616 9.80065 16.6666L6.66732 19.7666V8.33325C6.66732 7.89122 6.84291 7.4673 7.15547 7.15474C7.46803 6.84218 7.89196 6.66659 8.33398 6.66659H31.6673C32.1093 6.66659 32.5333 6.84218 32.8458 7.15474C33.1584 7.4673 33.334 7.89122 33.334 8.33325V23.0999Z"
                            fill="#DBDBDB"
                          />
                        </svg>
                        <header>
                          Drag and drop documents or{" "}
                          <label className="custom-file-upload theme-accent">
                            <input type="file" hidden />
                            Browse
                          </label>{" "}
                          to upload
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-area">
                  <h2>Address:</h2>
                  <p>
                    Send us proof of your address, clearly showing your full
                    name and home address.
                  </p>
                  <div className="drag-area-wrap">
                    <div className="drag-area text-center">
                      <div className="document-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6673 3.33325H8.33398C7.0079 3.33325 5.73613 3.86004 4.79845 4.79772C3.86077 5.7354 3.33398 7.00717 3.33398 8.33325V31.6666C3.33398 32.9927 3.86077 34.2644 4.79845 35.2021C5.73613 36.1398 7.0079 36.6666 8.33398 36.6666H31.6673C31.9415 36.6628 32.2147 36.6349 32.484 36.5833L32.984 36.4666H33.1007H33.184L33.8007 36.2333L34.0173 36.1166C34.184 36.0166 34.3673 35.9333 34.534 35.8166C34.7565 35.6529 34.9681 35.4747 35.1673 35.2833L35.284 35.1333C35.4476 34.9674 35.5981 34.7891 35.734 34.5999L35.884 34.3833C36.0004 34.1977 36.1008 34.0025 36.184 33.7999C36.2297 33.72 36.2687 33.6363 36.3007 33.5499C36.384 33.3499 36.434 33.1333 36.5007 32.9166V32.6666C36.5951 32.3409 36.6511 32.0053 36.6673 31.6666V8.33325C36.6673 7.00717 36.1405 5.7354 35.2029 4.79772C34.2652 3.86004 32.9934 3.33325 31.6673 3.33325ZM8.33398 33.3333C7.89196 33.3333 7.46803 33.1577 7.15547 32.8451C6.84291 32.5325 6.66732 32.1086 6.66732 31.6666V24.4833L12.1507 18.9833C12.3056 18.827 12.4899 18.703 12.693 18.6184C12.8961 18.5338 13.114 18.4903 13.334 18.4903C13.554 18.4903 13.7718 18.5338 13.9749 18.6184C14.178 18.703 14.3624 18.827 14.5173 18.9833L28.8507 33.3333H8.33398ZM33.334 31.6666C33.3324 31.8721 33.2929 32.0755 33.2173 32.2666C33.1792 32.3478 33.1346 32.4259 33.084 32.4999C33.0394 32.5705 32.9892 32.6374 32.934 32.6999L24.0173 23.7833L25.484 22.3166C25.6389 22.1604 25.8233 22.0364 26.0264 21.9518C26.2295 21.8672 26.4473 21.8236 26.6673 21.8236C26.8873 21.8236 27.1052 21.8672 27.3083 21.9518C27.5114 22.0364 27.6957 22.1604 27.8507 22.3166L33.334 27.8166V31.6666ZM33.334 23.0999L30.2007 19.9999C29.2469 19.0949 27.9821 18.5904 26.6673 18.5904C25.3525 18.5904 24.0878 19.0949 23.134 19.9999L21.6673 21.4666L16.8673 16.6666C15.9135 15.7616 14.6488 15.2571 13.334 15.2571C12.0192 15.2571 10.7544 15.7616 9.80065 16.6666L6.66732 19.7666V8.33325C6.66732 7.89122 6.84291 7.4673 7.15547 7.15474C7.46803 6.84218 7.89196 6.66659 8.33398 6.66659H31.6673C32.1093 6.66659 32.5333 6.84218 32.8458 7.15474C33.1584 7.4673 33.334 7.89122 33.334 8.33325V23.0999Z"
                            fill="#DBDBDB"
                          />
                        </svg>
                        <header>
                          Drag and drop documents or{" "}
                          <label className="custom-file-upload theme-accent">
                            <input type="file" hidden />
                            Browse
                          </label>{" "}
                          to upload
                        </header>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  text-center">
                  <div className="col">
                    <button className="btn custom-btn">Send documents</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-4">
              <div className="box activation-email">
                <div className="table-title">
                  <h2>2FA activation email</h2>
                </div>
                <p>
                  Status:<span className="danger">Inactive</span>
                </p>
                <p>
                  Protect your account with two-step email verification, we will
                  send a code to your email when you want to make a withdrawal
                  or transfer.
                </p>
                <div className="row align-items-center">
                  <div className="col-md-4 col">
                    <h2 className="theme-accent">Activation code</h2>
                  </div>
                  <div className="col">
                    <button className="btn custom-btn">Receice code</button>
                  </div>
                </div>
                <div className="row  align-items-center">
                  <div className="col-md-4 col">
                    <h2 for="" className="theme-accent">
                      Confirmation code
                    </h2>
                  </div>
                  <div className="col-md-6 col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="000 000"
                    />
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <button className="btn custom-btn">Enable F2 email</button>
                  </div>
                </div>
              </div>
              <div className="box activation-mobile">
                <div className="table-title">
                  <h2>2FA activation mobile</h2>
                </div>
                <p>
                  Status:<span className="danger">Inactive</span>
                </p>
                <p>
                  Protect your account with google apps two step verification,
                  we will request this code when you want to make a withdrawal
                  or transfer.
                </p>

                <div className="row align-items-center">
                  <div className="col-md-4 col">
                    <h2 className="theme-accent">Download App</h2>
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center">
                      <div className="app-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.438 8.24996H20.4375C19.7123 8.24996 19.125 8.8373 19.125 9.56246V15.5625C19.125 16.2872 19.7123 16.8745 20.4375 16.8745C21.1622 16.874 21.7495 16.2867 21.7495 15.5615V9.56152C21.7495 8.83637 21.1617 8.24902 20.437 8.24902L20.438 8.24996Z"
                            fill="#54358E"
                          />
                          <path
                            d="M3.56297 8.25021H3.5625C2.83734 8.25021 2.25 8.83755 2.25 9.56271V15.5627C2.25 16.2874 2.83734 16.8747 3.5625 16.8747C4.28719 16.8743 4.87453 16.2869 4.87453 15.5618V9.56177C4.87453 8.83661 4.28672 8.24927 3.56203 8.24927L3.56297 8.25021Z"
                            fill="#54358E"
                          />
                          <path
                            d="M5.8125 8.24995V17.2499C5.8125 18.0782 6.48375 18.7495 7.3125 18.7495H8.25V21.937C8.25 22.6617 8.83734 23.249 9.5625 23.249C10.2872 23.2485 10.8745 22.6612 10.8745 21.936V18.7485H13.1245V21.936C13.1245 22.6607 13.7119 23.2481 14.437 23.2481C15.1617 23.2476 15.7491 22.6603 15.7491 21.9351V18.7476H16.6866L16.6861 18.7476C17.5144 18.7476 18.1861 18.0758 18.1861 17.2476V8.24756L5.8125 8.24995Z"
                            fill="#54358E"
                          />
                          <path
                            d="M18.0113 6.37499C17.626 5.00202 16.7082 3.82921 15.4698 3.05765C15.4004 3.01452 15.3301 2.97233 15.2588 2.93202C15.1876 2.89124 15.1159 2.8514 15.0441 2.81249L15.2823 2.38687L16.0271 1.04343V1.04296C16.0796 0.947336 16.0454 0.827336 15.9502 0.774367C15.9498 0.773899 15.9498 0.773899 15.9493 0.773899C15.9202 0.757492 15.8884 0.749055 15.8555 0.748586L15.8551 0.748539C15.7829 0.748071 15.7168 0.786977 15.6821 0.850258L14.9274 2.21198L14.6893 2.64088C14.6143 2.6076 14.5384 2.57619 14.4615 2.54713C14.3846 2.51807 14.3077 2.4876 14.2295 2.45994L14.229 2.45948C12.7876 1.95229 11.2168 1.95229 9.77586 2.45948C9.69758 2.48713 9.62023 2.51619 9.54383 2.54666C9.46695 2.5776 9.39102 2.60901 9.31602 2.64041L9.07789 2.21151L8.3232 0.852133L8.32273 0.851664C8.26742 0.756977 8.14602 0.725571 8.0518 0.780883C7.96039 0.833852 7.92758 0.949633 7.97633 1.04291L8.71742 2.38354L8.95555 2.80916C8.88242 2.84713 8.8107 2.88651 8.73992 2.92682C8.66867 2.96713 8.59883 3.00932 8.52992 3.05432C7.29242 3.82588 6.37367 4.99869 5.9893 6.37025H5.98883C5.88242 6.73588 5.82383 7.11416 5.81445 7.49525H18.1829L18.1824 7.49479C18.1726 7.11416 18.114 6.73635 18.0076 6.37072L18.0113 6.37499ZM9.18852 5.62499L9.18805 5.62494C8.87727 5.62447 8.62555 5.37276 8.62555 5.06244C8.62555 4.75166 8.87727 4.49994 9.18805 4.49994C9.49836 4.49994 9.75055 4.75166 9.75055 5.06244V5.06197C9.75055 5.37229 9.49836 5.62447 9.18805 5.62447L9.18852 5.62499ZM14.8135 5.62499L14.813 5.62494C14.5023 5.62447 14.2505 5.37276 14.2505 5.06244C14.2505 4.75166 14.5023 4.49994 14.813 4.49994C15.1234 4.49994 15.3755 4.75166 15.3755 5.06244V5.06197C15.3755 5.37229 15.1234 5.62447 14.813 5.62447L14.8135 5.62499Z"
                            fill="#54358E"
                          />
                        </svg>
                      </div>
                      <span>Android</span>
                      <div className="app-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="24"
                          viewBox="0 0 21 24"
                          fill="none"
                        >
                          <path
                            d="M14.0134 3.83753C14.7964 2.94004 15.3511 1.7176 15.3511 0.479691C15.3511 0.309478 15.3348 0.139265 15.3021 0C14.0297 0.0464217 12.4962 0.804643 11.5826 1.82592C10.8648 2.59961 10.196 3.83752 10.196 5.07544C10.196 5.26112 10.2286 5.44681 10.2449 5.5087C10.3265 5.52418 10.457 5.53965 10.5875 5.53965C11.7295 5.53965 13.1651 4.81238 14.0134 3.83753ZM14.9106 5.80271C13.0019 5.80271 11.4521 6.90135 10.457 6.90135C9.39662 6.90135 8.00997 5.8646 6.34598 5.8646C3.19746 5.8646 0 8.34043 0 12.9981C0 15.9072 1.17458 18.971 2.6428 20.9516C3.89895 22.6228 4.99196 24 6.57437 24C8.14048 24 8.82565 23.0097 10.767 23.0097C12.7409 23.0097 13.1814 23.9691 14.9106 23.9691C16.6235 23.9691 17.7655 22.4836 18.8422 21.0135C20.0494 19.3269 20.5551 17.6867 20.5714 17.6093C20.4735 17.5783 17.1945 16.3095 17.1945 12.7505C17.1945 9.67118 19.7721 8.294 19.9189 8.18569C18.2223 5.8646 15.6284 5.80271 14.9106 5.80271Z"
                            fill="#54358E"
                          />
                        </svg>
                      </div>
                      <span>Apple</span>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-4 col">
                    <h2 className="theme-accent">Activation code</h2>
                  </div>
                  <div className="col-12">
                    <div className="qr-code">
                      <img src="assets/images/qr.png" alt="" />
                      <h2>GT04LG2NZY63ZJAS</h2>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-4 col">
                    <h2 for="" className="theme-accent">
                      Confirmation code
                    </h2>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="000 000"
                    />
                  </div>
                </div>
                <div className="row  text-center">
                  <div className="col">
                    <button className="btn custom-btn">Enable 2FA Mobile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfers;
