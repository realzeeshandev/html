export default function Fourth() {
  return (
    <div>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        STUDENT REGISTRATION FORM
      </h1>

      <form>
        <table>
          <tbody>
            <tr>
              <td>FIRST NAME</td>
              <td>
                <input type="text" /> (max 30 characters a-z and A-Z)
              </td>
            </tr>

            <tr>
              <td>LAST NAME</td>
              <td>
                <input type="text" /> (max 30 characters a-z and A-Z)
              </td>
            </tr>

            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select>
                  <option>Month</option>
                </select>
                <select>
                  <option>Day</option>
                </select>
                <select>
                  <option>Year</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>EMAIL ID</td>
              <td>
                <input type="text" /> (example: abc@gmail.com)
              </td>
            </tr>

            <tr>
              <td>MOBILE NUMBER</td>
              <td>
                <input type="text" /> (10 digit number)
              </td>
            </tr>

            <tr>
              <td>GENDER</td>
              <td>
                <input type="radio" name="gender" /> Male
                <input type="radio" name="gender" /> Female
              </td>
            </tr>

            <tr>
              <td>ADDRESS</td>
              <td>
                <textarea cols="31" rows="5"></textarea>
              </td>
            </tr>

            <tr>
              <td>CITY</td>
              <td>
                <input type="text" /> (max 30 characters)
              </td>
            </tr>

            <tr>
              <td>PIN CODE</td>
              <td>
                <input type="text" /> (6 digit number)
              </td>
            </tr>

            <tr>
              <td>STATE</td>
              <td>
                <input type="text" /> (max 30 characters)
              </td>
            </tr>

            <tr>
              <td>COUNTRY</td>
              <td>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <td>HOBBY</td>
              <td>
                <input type="checkbox" /> Drawing
                <input type="checkbox" /> Singing
                <input type="checkbox" /> Dancing
                <input type="checkbox" /> Sketching
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                Other <input type="checkbox" /> <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <table border="1">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>SI.NO</th>
              <th>Examination</th>
              <th>Board</th>
              <th>Percentage</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>CLASS X</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <td></td>
              <td>2</td>
              <td>CLASS XII</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <td></td>
              <td>3</td>
              <td>Graduation</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <td></td>
              <td>4</td>
              <td>Masters</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
          </tbody>
        </table>

        <br />

        <table>
          <tbody>
            <tr>
              <td>Applied For</td>
              <td>
                <input type="radio" name="course" /> BCA
                <input type="radio" name="course" /> B.Com
                <input type="radio" name="course" /> B.Sc
                <input type="radio" name="course" /> B.A
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}