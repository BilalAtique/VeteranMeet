import {
  allEntities,
  Entity,
  EntityType,
  organizationEntities,
} from "./Entity";

export type Event = {
  organizer: Entity;
  eventType: EventType;
  eventTime: Date;
  location: string;
  eventDescription: string;
  stars: number; // no more than 5000
  // peopleInterested : EntityRef
};

export type EventType =
  | "public-talk"
  | "motivational-talk"
  | "professional-talk"
  | "professional-task"
  | "plantation-drive"
  | "orphanage-visit"
  | "patient-visit"
  | "recreational-visit"
  | "old-home-visit"
  | "book-reading";

export function allowedEventOrganizers(eventType: EventType): Set<EntityType> {
  switch (eventType) {
    case "public-talk":
    case "recreational-visit":
      return allEntities;

    case "motivational-talk":
    case "professional-talk":
    case "professional-task":
      return organizationEntities;

    case "plantation-drive":
    case "orphanage-visit":
    case "patient-visit":
    case "old-home-visit":
    case "book-reading":
      return new Set(["veteran", "ngo"]);
  }
}
