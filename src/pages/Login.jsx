import Add from "../img/addAvatar.png";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat with ThaiNN</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
