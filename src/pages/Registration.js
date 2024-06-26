import React from "react";

export default function Registration() {
  return (
    <div>
      <form action="register" method="post">
        <h2>Registration Form</h2>
        <label>Username:</label>
        <br />
        <input type="text" name="username" />
        <br />
        <br />

        <label>Email:</label>
        <br />
        <input type="email" name="email" />
        <br />
        <br />

        <label>Password:</label>
        <br />
        <input type="password" name="password" />
        <br />
        <br />

        <div class="flex-container">
          <div class="flex-item">
            <label>Gender:</label>
            <br />
            <label>Male</label>
            <input type="radio" name="gender" value="Male" />
            <label>Female</label>
            <input type="radio" name="gender" value="Female" />
            <label>Other</label>
            <input type="radio" name="gender" value="Other" />
          </div>
          <div class="flex-item">
            <label>Role:</label>
            <br />
            <label>Admin</label>
            <input type="radio" name="role" value="admin" />
            <label>Customer</label>
            <input type="radio" name="role" value="customer" />
          </div>
        </div>

        <label>Address:</label>
        <br />
        <textarea name="address"></textarea>
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
