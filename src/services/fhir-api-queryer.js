const fhirApiQueryer = () => {
  const init = {
    method: "GET",
    headers: { "Content-Type": "application/fhir+json" }
  };

  const getBundle = async (type) => {
    try {
      const bundle = await fetch(`http://hapi.fhir.org/baseR4/${type}`, init);
      return bundle.json();
    }
    catch(e) {
      console.error(e);
    }
  }

  const getImmunizations = async (patientID) => {
    try {
      const immunizations = await fetch(`http://hapi.fhir.org/baseR4/Immunization?patient=${patientID}`, init);
      return immunizations.json();
    }
    catch(e) {
      console.error(e);
    }
  }
  return { getBundle, getImmunizations };
}

  
/*
*/


export default fhirApiQueryer;
