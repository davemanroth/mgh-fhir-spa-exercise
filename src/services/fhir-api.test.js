import fhirApiQueryer from './fhir-api-queryer';
import mockImmunizationBundle from '../__mocks__/immunization_bundle';
import mockPatientResource from '../__mocks__/patient_resource';

describe('FHIR API tests', () => {
  beforeEach( () => {
    fetch.resetMocks();
  });

  it('should return a Bundle resource type with "Immunization" or "Patient" requests', () => {
    fetch.mockResponse(JSON.stringify(mockImmunizationBundle));
    ["Immunization", "Patient"].forEach( (type) => {
      fhirApiQueryer(type).then( (res) => {
        expect(res.hasOwnProperty("resourceType")).toBe(true);
        expect(res.resourceType).toEqual("Bundle");
      });
    });//forEach
  });

  it('should return a Patient resource type', () => {
    fetch.mockResponse(JSON.stringify(mockPatientResource));
    fhirApiQueryer("Patient/1471a46f-ae47-4128-bc0c-81adf0ea417b").then( (res) => {
      expect(res.hasOwnProperty("resourceType")).toBe(true);
      expect(res.resourceType).toEqual("Patient");
    });
  });

  it('should have a non-zero length "entry" array property for Immunization bundle', () => {
    fetch.mockResponse(JSON.stringify(mockImmunizationBundle));
    fhirApiQueryer("Immunization").then( (res) => {
      expect(res.hasOwnProperty("entry")).toBe(true);
      expect(res.entry.length).toBeGreaterThan(0);
    });
  });

  it('should have an occurrenceDateTime prop for Immunization bundle', () => {
    fetch.mockResponse(JSON.stringify(mockImmunizationBundle));
    fhirApiQueryer("Immunization").then( (res) => {
      const resource = res.entry[0].resource;
      expect(resource.hasOwnProperty("occurrenceDateTime")).toBe(true);
      expect(resource.occurrenceDateTime).toBe("2013-12-27T12:20:53.090-06:00");
    });
  });

  it('should have non-empty "gender" property for Patient resource type', () => {
    fetch.mockResponse(JSON.stringify(mockPatientResource));
    fhirApiQueryer("Patient/1471a46f-ae47-4128-bc0c-81adf0ea417b").then( (res) => {
      expect(res.hasOwnProperty("gender")).toBe(true);
      expect(res.gender).toEqual("Male");
    });
  });

  it('should have non-empty "birthDate" property for Patient resource type', () => {
    fetch.mockResponse(JSON.stringify(mockPatientResource));
    fhirApiQueryer("Patient/1471a46f-ae47-4128-bc0c-81adf0ea417b").then( (res) => {
      expect(res.hasOwnProperty("birthDate")).toBe(true);
      expect(res.birthDate).toEqual("1952-06-12");
    });
  });
});

