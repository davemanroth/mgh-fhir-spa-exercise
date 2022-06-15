const FhirApiQueryer = async (args) => {
  const init = {
    method: "GET",
    headers: { "Content-Type": "application/fhir+json" }
  };

  try {
    const res = await fetch(`http://hapi.fhir.org/baseR4/${args}`, init);
    return res.json();
  }
  catch(e) {
    console.error(e);
  }
}
/*
*/


export default FhirApiQueryer;
