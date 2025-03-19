import { useLoaderData } from "react-router-dom";

export const CountryDetails = () => {
  // ✅ Call useLoaderData() directly inside the component
  const detailedData = useLoaderData();
  console.log(detailedData);

  return (
    <>
      <section className="country-details container card">
        <div className="details-grid">
          <aside className="grid-left">
            <h3>Country Information</h3>
            <p>
              <strong>Capital: </strong>
              <span>{detailedData.capital}</span>
            </p>
            <p>
              <strong>Population: </strong>
              <span>{detailedData.population}</span>
            </p>
            <p>
              <strong>Continent: </strong>
              <span>{detailedData.continents}</span>
            </p>
            <p>
              <strong>Region: </strong>
              <span>{detailedData.region}</span>
            </p>
            <p>
              <strong>Top-Level Domain: </strong>
              <span>{detailedData.tld.join(", ")}</span>
            </p>
          </aside>

          <div className="grid-center">
            <h2>{detailedData.name.common || detailedData.name.official}</h2>
            <figure>
              <img src={detailedData.flags.svg} alt={detailedData.flags.alt} />
            </figure>
          </div>

          <aside className="grid-right">
            <h3>More Details</h3>
            <p>
              <strong>Languages: </strong>
              <span>
                {detailedData.languages
                  ? Object.values(detailedData.languages).join(", ")
                  : " N/A"}
              </span>
            </p>
            <p>
              <strong>Currencies: </strong>
              <span>
                {detailedData.currencies
                  ? Object.values(detailedData.currencies)
                      .map(
                        (Currency) => `${Currency.name} (${Currency.symbol})`
                      )
                      .join(", ")
                  : "N/A"}
              </span>
            </p>
            {detailedData.coatOfArms?.svg && (
              <p>
                <strong>Coat Of Arms: </strong>
                <img src={detailedData.coatOfArms.svg} alt={"Coat Of Arms"} />
              </p>
            )}
            {detailedData.latlng && (
              <p>
                <strong>Location: </strong>
                <a
                  href={detailedData.maps.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {detailedData.latlng[0]}, {detailedData.latlng[1]}
                </a>
              </p>
            )}
            {detailedData.borders ? (
              <p>
                <strong>Borders: </strong>
                <span>{detailedData.borders.join(", ")}</span>
              </p>
            ) : (
              <p>
                <strong>ALT spellings: </strong>
                <span>{detailedData.altSpellings.join(", ")}</span>
              </p>
            )}
          </aside>
        </div>
      </section>
    </>
  );
};
