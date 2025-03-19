export const FactCards = ({ currData }) => {
  return (
    <li className="card home-li">
      <h3>{currData.name}</h3>
      <p>
        <strong>Capital :</strong> {currData.capital}
      </p>
      <p>
        <strong>Population :</strong> {currData.population}
      </p>
      <p>
        <strong>Population :</strong> {currData.population}
      </p>
      <p>
        <strong>Currency : </strong>
        {currData.currency}
      </p>
      <p>
        <strong>Facts :</strong> {currData.interestingFact}
      </p>
    </li>
  );
};
