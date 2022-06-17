import fhirApiQueryer from './fhir-api-queryer';
import mockObservationBundle from '../__mocks__/observation_bundle';
import mockPatientResource from '../__mocks__/patient_resource';

describe('FHIR API tests', () => {
  beforeEach( () => {
    fetch.resetMocks();
  });

  it('should return a Bundle resource type with "Observation" or "Patient" requests', () => {
    fetch.mockResponse(JSON.stringify(mockObservationBundle));
    ["Observation", "Patient"].forEach( (type) => {
      fhirApiQueryer(type).then( (res) => {
        expect(res.hasOwnProperty("resourceType")).toBe(true);
        expect(res.resourceType).toEqual("Bundle");
      });
    });//forEach
  });

  it('should return a Patient resource type', () => {
    fetch.mockResponse(JSON.stringify(mockPatientResource));
    fhirApiQueryer("Patient/5dde9971-7b4f-4897-a385-192366517aa5").then( (res) => {
      expect(res.hasOwnProperty("resourceType")).toBe(true);
      expect(res.resourceType).toEqual("Patient");
    });
  });

  it('should have a non-zero length "entry" array property for Observation bundle', () => {
    fetch.mockResponse(JSON.stringify(mockObservationBundle));
    fhirApiQueryer("Observation").then( (res) => {
      expect(res.hasOwnProperty("entry")).toBe(true);
      expect(res.entry.length).toBeGreaterThan(0);
    });
  });

  it('should have an effectiveDateTime prop for Observation bundle', () => {
    fetch.mockResponse(JSON.stringify(mockObservationBundle));
    fhirApiQueryer("Observation").then( (res) => {
      const resource = res.entry[0].resource;
      expect(resource.hasOwnProperty("effectiveDateTime")).toBe(true);
      expect(resource.effectiveDateTime).toBe("2013-12-27T12:20:53.090-06:00");
    });
  });

  it('should have non-empty "gender" property for Patient resource type', () => {
    fetch.mockResponse(JSON.stringify(mockPatientResource));
    fhirApiQueryer("Patient/5dde9971-7b4f-4897-a385-192366517aa5").then( (res) => {
      expect(res.hasOwnProperty("gender")).toBe(true);
      expect(res.gender).toEqual("Male");
    });
  });

  it('should have non-empty "birthDate" property for Patient resource type', () => {
    fetch.mockResponse(JSON.stringify(mockPatientResource));
    fhirApiQueryer("Patient/5dde9971-7b4f-4897-a385-192366517aa5").then( (res) => {
      expect(res.hasOwnProperty("birthDate")).toBe(true);
      expect(res.birthDate).toEqual("1952-06-12");
    });
  });
});
