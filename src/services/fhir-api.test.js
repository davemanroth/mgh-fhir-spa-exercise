import FhirAPI from './fhir-api';

describe('FHIR API tests', () => {
  beforeEach( () => {
    fetch.resetMocks();
  });

  it('should return a Bundle resourceType with "Specimen" or "Patient" requests', () => {
    const mockResp = { resourceType: "Bundle" };
    fetch.mockResponse(JSON.stringify(mockResp));
    ["Specimen", "Patient"].forEach( (type) => {
      FhirAPI(type).then( (res) => {
        expect(res.hasOwnProperty("resourceType")).toBe(true);
        expect(res.resourceType).toEqual("Bundle");
      });
    });//forEach
  });

/*
*/
  it('should return a Patient resourceType', () => {
    const mockResp = { resourceType: "Patient" };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirAPI("Patient/1194").then( (res) => {
      expect(res.hasOwnProperty("resourceType")).toBe(true);
      expect(res.resourceType).toEqual("Patient");
    });
  });

  it('should have non-empty "type" property for Specimen bundle', () => {
    const mockResp = { type: "searchset" };
    fetch.mockResponse(JSON.stringify(mockResp));
    FhirAPI("Specimen").then( (res) => {
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
    FhirAPI("Specimen").then( (res) => {
      expect(res.hasOwnProperty("collection")).toBe(true);
      expect(typeof res.collection).toBe("object");
      expect(res.collection.hasOwnProperty("collectedDateTime")).toBe(true);
      expect(res.collection.collectedDateTime).toBe("2015-02-25T00:00:00-06:00");
    });
  });
});


