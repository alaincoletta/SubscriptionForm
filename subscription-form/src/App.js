import React from "react";

export default function App() {
  const [naam, setNaam] = React.useState("");
  const [voornaam, setVoornaam] = React.useState("");
  const [geboortedatum, setGeboortedatum] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Naam: ${naam}
      Vooraam: ${voornaam}
      Geboortedatum: ${geboortedatum}
      Email: ${email}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <p>
      <label>
        Naam:
        <input
          name="last_name"
          type="text"
          value={naam}
          onChange={e => setNaam(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        Vorrnaam:
        <input
          name="first_name"
          type="text"
          value={voornaam}
          onChange={e => setVoornaam(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        Geboortedatum:
        <input
          name="birthdate"
          type="date"
          value={geboortedatum}
          onChange={e => setGeboortedatum(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>
      </p>
      <button>Submit</button>
    </form>
  );
}
