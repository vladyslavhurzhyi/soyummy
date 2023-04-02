//class name for btn//
//subscribe-btn ---- btn for subscribe green (mob + md + xl)
//signup-btn ---- btn for signup/save changes/
//cancel-btn ----  btn for cancel (gray bg)
//logout-btn ----  btn for logout (green bg)

export const Button = ({ text, onClick, cssClass }) => {
  return (
    <button className={cssClass} onClick={onClick}>
      {text}
    </button>
  );
};
