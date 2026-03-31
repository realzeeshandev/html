export default function Ex() {
  return (
    <>
      <label>
        EMAIL ID &nbsp;&nbsp;
        <input type="email" required />
      </label>
      <br /><br />

      <label>
        MOBILE NUMBER &nbsp;&nbsp;
        <input type="text" required /> (10 digit number)
      </label>
      <br /><br />

      <label>GENDER &nbsp;&nbsp;</label>
      <input type="radio" name="gender" /> Male
      <input type="radio" name="gender" /> Female
      <br /><br />

      <label>
        ADDRESS &nbsp;&nbsp;
        <textarea cols="31" rows="3"></textarea>
      </label>
      <br /><br />

      <label>
        CITY &nbsp;&nbsp;
        <input type="text" /> (max 30 characters a-z and A-Z)
      </label>
      <br /><br />

      <label>
        PIN CODE &nbsp;&nbsp;
        <input type="text" /> (6 digit number)
      </label>
      <br /><br />

      <label>
        STATE &nbsp;&nbsp;
        <input type="text" /> (max 30 characters a-z and A-Z)
      </label>
      <br /><br />

      <label>
        COUNTRY &nbsp;&nbsp;
        <input type="text" />
      </label>
      <br /><br />
    </>
  );
}
