import './App.css';

function App() {
  return (
    <div className="App">     
      <div class="container">
      <div class="login">
        <form>
          <h1>Login In</h1>
          <hr />
          <p>Explore the World!</p>
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button><span>Submit</span></button>
          <p><a href="#">Forgot Password?</a></p>
        <closeform></closeform></form>
      </div>
      <div class="pic">
        <img src="/pic/Meeting.png" />
      </div>
    </div>
    </div>
  );
}

export default App;
