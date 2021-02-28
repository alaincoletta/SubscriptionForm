import React from "react";

export default function App() {
  const [isA, setIsA] = React.useState(true);
  const [naam, setNaam] = React.useState("");
  const [voornaam, setVoornaam] = React.useState("");
  const [geboortedatum, setGeboortedatum] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [rijksregisternummer, setRijksregisternummer] = React.useState("");
  const [mum_last_name, setMumLastName] = React.useState("");
  const [mum_first_name, setMumFirstName] = React.useState("");
  const [papa_last_name, setPapaLastName] = React.useState("");
  const [papa_first_name, setPapaFirstName] = React.useState("");

  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    setIsA(false);
    setTimeout(() =>
    console.log(`
      isA: ${isA}
      Naam: ${naam}
      Vooraam: ${voornaam}
      Geboortedatum: ${geboortedatum}
      Email: ${email}
      Accepted Terms: ${acceptedTerms}
    `)
  );

    event.preventDefault();
  }

  const A = (
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

  const B = (
    <form onSubmit={handleSubmit}>
      <h1>Rijksregisternummer van de leerling</h1>
      <p>
      <label>
        Rijksregisternummer:
        <input
          name="Rijksregisternummer"
          type="text"
          value={rijksregisternummer}
          onChange={e => setRijksregisternummer(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        mama naam:
        <input
          name="naam"
          type="text"
          value={mum_last_name}
          onChange={e => setMumLastName(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        mama voornaam:
        <input
          name="naam"
          type="text"
          value={mum_first_name}
          onChange={e => setMumFirstName(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        papa naam:
        <input
          name="naam"
          type="text"
          value={papa_last_name}
          onChange={e => setPapaLastName(e.target.value)}
          required />
      </label>
      </p>
      <p>
      <label>
        papa naam:
        <input
          name="naam"
          type="text"
          value={papa_first_name}
          onChange={e => setPapaFirstName(e.target.value)}
          required />
      </label>
      </p>

      <button>Submit</button>
    </form>
  );
  return isA?A:B
}
