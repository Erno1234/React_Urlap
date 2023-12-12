import { adatLeiro } from "../Model/adatLeiro";
export default function FoUrlap(props) {
  const adat = {};
  function adatKuld(event) {
    event.preventDefault();
    props.adatKap(adat);
  }

  function adatValt(event) {
    console.log(event.target.id);
    console.log(event.target.value);
    adat[event.target.id] = event.target.value;
  }

  return (
    <form onSubmit={adatKuld}>
      {Object.keys(adatLeiro).map((key) => {
        let elem = adatLeiro[key];
        return (
          <div className="mb-3 mt-3">
            <label htmlFor="nev" className="form-label">
              
            </label>
            <input
              type={elem.tipus}
              className="form-control"
              id={key}
              placeholder={elem.placeholder}
              name={elem.name}
              onChange={adatValt}
            />
          </div>
        );
      })}

      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>

    /*<label htmlFor="nev" className="form-label">
    Név:
  </label>
  <input
    type="text"
    className="form-control"
    id="nev"
    placeholder="Név"
    name="nev"
    onChange={adatValt}
  />*/
  );
}
