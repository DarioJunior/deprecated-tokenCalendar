import { getAllEvents, registerEvent } from '../models/events.model';
import IEvent from '../repositories/IEvent';

export async function getEventsList(userId: number) {
  if (!userId) return false;
  const result = await getAllEvents(userId);
  return result;
}

export async function registerEventInList(eventInfo: IEvent) {
  const result = await registerEvent(eventInfo);
  if(!result) return false;
  return result;
}
