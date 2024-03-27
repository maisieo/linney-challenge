// SignUpForm.js

import React from "react";

let SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <div className="sign-up-form__buttons">
        <button className="sign-up-form__button sign-up-form__button--google">Sign up with Google</button>
        <button className="sign-up-form__button sign-up-form__button--github">Sign up with Github</button>
        <button className="sign-up-form__button sign-up-form__button--email">Sign up with Email</button>
      </div>
      <p className="sign-up-form__agreement">
        By providing your email address or using a single sign-on provider to create an account, you agree to our {" "}
        <a href="https://example.com/legal" target="_blank" rel="noopener noreferrer" className="sign-up-form__link">Terms of Service</a>{" "}
        and that you have reviewed our {" "}
        <a href="https://example.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="sign-up-form__link">Privacy Policy</a>{" "}
        and {" "}
        <a href="https://example.com/cookie-policy" target="_blank" rel="noopener noreferrer" className="sign-up-form__link">Cookie Policy</a>.
      </p>
    </div>
  );
};

export default SignUpForm;
