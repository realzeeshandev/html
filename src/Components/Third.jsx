export default function Third() {
  return (
    <div>
      <h1>My Resume</h1>

      <ul>
        <li>
          <h3><strong>Summary:</strong></h3>
          <p>
            Ambitious Virtual University student with a strong intermediate background,
            seeking an entry-level Web Developer position. Eager to apply a growing
            knowledge of HTML, CSS, and JavaScript to build responsive web applications
            while contributing to a forward-thinking development team.
          </p>
        </li>

        <li>
          <h3><strong>Education:</strong></h3>
          <ol>
            <li>
              Complete my Matric in <strong>2022</strong> from{" "}
              <strong>Khair-un-Nisa Cambridge High School</strong>
            </li>
            <li>
              Complete my Intermediate in <strong>2024</strong> from{" "}
              <strong>Superior Group of Colleges</strong>
            </li>
            <li>
              Continue my Study From{" "}
              <strong>Virtual University in BSCS</strong>
            </li>
          </ol>
        </li>

        <li>
          <h3><strong>Work Experience:</strong></h3>
          <p>I have no work experience</p>
        </li>

        <li>
          <h3><strong>Skills:</strong></h3>
          <p>
            I have learned course of <strong>Social Media Marketing</strong>
          </p>
        </li>
      </ul>

      <h3>Profile Photo:</h3>
      {/* Put your image inside public folder and use like this */}
      <img src="/image.jpg.jpeg" width="150px" alt="Profile" />

      <h3>
        <a href="/hobbies.html">Hobbies and Contact Info</a>
      </h3>
    </div>
  );
}