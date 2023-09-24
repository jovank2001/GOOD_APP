function login() {
    // Dummy in-memory database
    console.log('Button CLicked!');
    const db = [
    {
      username: 'username',
      password: '$2b$10$74TgbEKgOohusghNv/EoDuASGgQEMFdLwYqOpaQLGPV.zhRqlGQkO' // hashed 'password'
    }
    ];

    //Get credentials entered from the html form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Display credentials entered by user
    console.log("Username:", username);
    console.log("Password:", password);

    // Test authentication logic here

    //Username?
    const user = db.find(u => u.username === username);
    if (!user) {
      console.log('Invalid Credentials');
    }

    //Check hashed password
    const match = bcrypt.compare(password, user.password);

    //Valid Password?
    if (match) {
        // Generate and send token (not implemented here)
        console.log('Logged in');
      } else {
        console.log('Invalid Password');
      }
}
