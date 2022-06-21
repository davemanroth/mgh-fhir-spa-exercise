const fhirApiQueryer = () => {
  const init = {
    method: "GET",
    headers: { "Content-Type": "application/fhir+json" }
  };

  const getRawBundle = async (type) => {
    try {
      const bundle = await fetch(`http://hapi.fhir.org/baseR4/${type}`, init);
      const json = await bundle.json();
      //console.log(json);
      return json;
    }
    catch(e) {
      console.error(e);
    }
  }
  
  const hasAllProps = (resource, type) => {
    if (type === "Patient") {
      return ( Object.hasOwn(resource, "birthDate") &&
        Object.hasOwn(resource, "gender") );
    }
    else if (type === "Immunization") {
      return ( 
        Object.hasOwn(resource, "vaccineCode") &&
        Object.hasOwn(resource.vaccineCode, "text") &&
        Object.hasOwn(resource, "occurrenceDateTime")
      );
    }
    else {
      return false;
    }
  }

  const prepareOutput = async (type) => {
    const rawJson = await getRawBundle(type);
    const { entry } = rawJson;
    const preparedOutput = entry.filter( (item) => {
      const resource = item.resource;
      return hasAllProps(resource, type);
    });
    rawJson.entry = preparedOutput;
    return rawJson;
  }

  const getBundle = async (type) => {
    const preparedArrayBundle = await prepareOutput(type);
    return preparedArrayBundle;
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
