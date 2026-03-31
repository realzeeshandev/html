export default function Seventh() {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <label>First Name:</label>
        <input type="text" placeholder="John" />

        <label>Last Name:</label>
        <input type="text" placeholder="Smith" />
        <br />

        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <input type="radio" name="gender" /> Other
        <br />

        <label>Email:</label>
        <input type="email" placeholder="your email" required />

        <label>Password:</label>
        <input type="password" placeholder="your password" required />
        <br />

        <label>Birthday:</label>
        <select>
          <option>Month</option>
        </select>
        <select>
          <option>Day</option>
        </select>
        <select>
          <option>Year</option>
        </select>
        <br />

        <label>
          <input type="checkbox" required /> I agree to the terms and conditions
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}