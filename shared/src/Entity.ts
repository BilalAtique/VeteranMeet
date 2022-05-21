export type Entity = Veteran | NGO | EducationalInstitute | GenericOrganization;

export type CommonEntityData = {
  sectors: Set<EntitySector>;
  // followers : EntityRef[]
};

export type Veteran = CommonEntityData & {
  entityType: "veteran";
  name: string;
  email: string;
  location: string;
  stars: number;
  //following: EntityRef[] TODO
};

export type NGO = CommonEntityData & { entityType: "ngo" };

export type EducationalInstitute = CommonEntityData & {
  entityType: "educational-institute";
};
export type GenericOrganization = CommonEntityData & {
  entityType: "generic-organization";
};

export type EntityType = Entity["entityType"];

export const allEntities: Set<EntityType> = new Set([
  "veteran",
  "ngo",
  "educational-institute",
  "generic-organization",
]);

export const organizationEntities: Set<EntityType> = new Set([
  "ngo",
  "educational-institute",
  "generic-organization",
]);

export type EntitySector =
  | "engineering"
  | "business"
  | "technology"
  | "education"
  | "arts"
  | "literature"
  | "health";
