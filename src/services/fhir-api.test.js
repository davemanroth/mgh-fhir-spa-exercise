import FhirApiQueryer from './fhir-api-queryer';

describe('FHIR API tests', () => {
  beforeEach( () => {
    fetch.resetMocks();
  });

  it('should return a Bundle resource type with "Specimen" or "Patient" requests', () => {
    const mockResp = { resourceType: "Bundle" };
    fetch.mockResponse(JSON.stringify(mockResp));
    ["Specimen", "Patient"].forEach( (type) => {
      FhirApiQueryer(type).then( (res) => {
        expect(res.hasOwnProperty("resourceType")).toBe(true);
        expect(res.resourceType).toEqual("Bundle");
      });
    });//forEach
  });

/*
*/
  it('should return a Patient resource type', () => {
    const mockResp = { resourceType: "Patient" };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirApiQueryer("Patient/1194").then( (res) => {
      expect(res.hasOwnProperty("resourceType")).toBe(true);
      expect(res.resourceType).toEqual("Patient");
    });
  });

  it('should have non-empty "type" property for Specimen bundle', () => {
    const mockResp = { type: "searchset" };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirApiQueryer("Specimen").then( (res) => {
      expect(res.hasOwnProperty("type")).toBe(true);
      expect(res.type).toEqual("searchset");
    });
  });

  it('should have "collection" object with collectedDateTime prop for Specimen bundle', () => {
    const mockResp = { 
      collection: { 
        collectedDateTime: "2015-02-25T00:00:00-06:00" 
      }
    };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirApiQueryer("Specimen").then( (res) => {
      expect(res.hasOwnProperty("collection")).toBe(true);
      expect(typeof res.collection).toBe("object");
      expect(res.collection.hasOwnProperty("collectedDateTime")).toBe(true);
      expect(res.collection.collectedDateTime).toBe("2015-02-25T00:00:00-06:00");
    });
  });

  it('should have non-empty "gender" property for Patient resource type', () => {
    const mockResp = { gender: "female" };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirApiQueryer("Patient/1194").then( (res) => {
      expect(res.hasOwnProperty("gender")).toBe(true);
      expect(res.gender).toEqual("female");
    });
  });

  it('should have non-empty "birthDate" property for Patient resource type', () => {
    const mockResp = { birthDate: "1984-12-15" };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirApiQueryer("Patient/1194").then( (res) => {
      expect(res.hasOwnProperty("birthDate")).toBe(true);
      expect(res.birthDate).toEqual("1984-12-15");
    });
  });
});


