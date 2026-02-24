import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import { useState } from 'react';

function ProjHeadsInTheCloud(){

    const [film, setFilm] = useState('');
    const [loading, setLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setHasSearched(true);
        const locationList = new Set();

        await getdbpediaresults(locationList, film);
        await getwikidataresults(locationList, film);

        setLocations(Array.from(locationList));
        setLoading(false);
    };

    return(
        <>
            <Header /><hr />
            <Nav /><br /><br />
            <div className="container-sm mt-4 text-center">
                <div className="row justify-content-center">
                <div className="col-md-8 text-center"></div>
                <h2>Heads in the Cloud</h2>
                <h5>Ever watched a movie and wondered <em><b>where</b></em> those stunning scenes were shot?</h5>
                <h5>Explore film locations and start planning your next dream vacation to where the magic happened.</h5>

                <form onSubmit={handleSubmit} className="filmform mt-4">
                    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                        <input
                        type="text"
                        className="form-control"
                        id="inputFilm"
                        placeholder="Enter a film title"
                        required
                        value={film}
                        onChange={(e) => setFilm(e.target.value)}
                        style={{ maxWidth: "400px" }}
                        />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

                <div className="mt-4" id="results">
                    {loading && <img src="/cloud-test/img/projectHeads-loading.gif" alt="Loading..." className="mx-auto" />}
                    {!loading && locations.length > 0 && (
                        <>
                            <h2>Countries where <strong>{film}</strong> was filmed:</h2>
                            <ul className="list-group col-6 mx-auto">
                                {locations.map((location, index) => (
                                    <li key={index} style={{ listStyle: "none" }}>
                                        <a
                                            className="list-group-item list-group-item-action"
                                            href={`https://www.expedia.com/Hotel-Search?destination=${location.replace(/ /g, "%20")}&adults=2&rooms=1&sort=RECOMMENDED`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {location}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {!loading && hasSearched && locations.length === 0 && (
                    <p className="text-danger">No results found... Try another movie.</p>
                    )}
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default ProjHeadsInTheCloud

// -----------------------------
// Helper functions (can be placed in a separate file and imported)
// -----------------------------

async function getdbpediaresults(locationlist, film) {
    const dbpediaEndpoint = 'https://dbpedia.org/sparql';
    const dbpediaQuery = `
        PREFIX dbo: <http://dbpedia.org/ontology/>
        SELECT DISTINCT ?countryStr WHERE {
            ?film a dbo:Film.
            ?film dbp:country ?country.
            ?film rdfs:label ?label.
            FILTER (CONTAINS(LCASE(STR(?label)), LCASE("${film}"))).
            BIND(STR(?country) AS ?countryStr)
        }
    `;

    try {
        const response = await fetch(`${dbpediaEndpoint}?query=${encodeURIComponent(dbpediaQuery)}&format=json`);
        const data = await response.json();
        const countries = data.results.bindings;
        for (let i = 0; i < countries.length; i++) {
            let text = countries[i].countryStr.value;
            if (!text) continue;
            if (text.includes("http://dbpedia.org/resource/"))
                text = text.replace("http://dbpedia.org/resource/", "");
            text = text.replace(/_/g, " ");
            locationlist.add(text);
        }
    } catch (error) {
        console.error("DBpedia Error:", error);
    }
}

async function getwikidataresults(locationlist, film) {
    const wikidataEndpoint = 'https://query.wikidata.org/sparql';
    const wikidataQuery = `
        PREFIX wd: <http://www.wikidata.org/entity/>
        PREFIX wdt: <http://www.wikidata.org/prop/direct/>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT ?locationName WHERE {
            ?film wdt:P31 wd:Q11424;
                  rdfs:label ?filmTitle;
                  wdt:P840 ?narrativeLocation.
            ?narrativeLocation rdfs:label ?locationName.
            FILTER(LANG(?locationName) = "en")
            FILTER(CONTAINS(LCASE(STR(?filmTitle)), LCASE("${film}")))
        }
    `;

    try {
        const response = await fetch(`${wikidataEndpoint}?query=${encodeURIComponent(wikidataQuery)}`, {
            headers: { 'Accept': 'application/sparql-results+json' },
        });
        const data = await response.json();
        const countries = data.results.bindings;
        for (let i = 0; i < countries.length; i++) {
            const text = countries[i].locationName.value;
            locationlist.add(text);
        }
    } catch (error) {
        console.error("Wikidata Error:", error);
    }
}