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

export function veteranTitle(veteranStars: number): string {
  if (veteranStars >= 100000) return "Eternal Sage";
  if (veteranStars >= 70000) return "Platinum Veteran";
  if (veteranStars >= 65000) return "Sapphire Veteran";
  if (veteranStars >= 60000) return "Diamond Veteran";
  if (veteranStars >= 50000) return "Golden Veteran";
  if (veteranStars >= 40000) return "Ruby Veteran";
  if (veteranStars >= 25000) return "Silver Veteran";
  return "Veteran";
}
