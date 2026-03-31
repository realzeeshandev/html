
export default function Com() {
  return (
    <div>
      <label>
        First name &nbsp;&nbsp;
        <input type="text" maxLength={30} /> (max 30 characters a-z and A-Z)
      </label>
      <br /><br />

      <label>
        Last name &nbsp;&nbsp;
        <input type="text" maxLength={30} /> (max 30 characters a-z and A-Z)
      </label>
      <br /><br />

      <label>DATE OF BIRTH &nbsp;&nbsp;</label>

      <select>
        <option value="">Month</option>
      </select>

      <select>
        <option value="">Day</option>
      </select>

      <select>
        <option value="">Year</option>
      </select>

      <br /><br />
    </div>
  );
}