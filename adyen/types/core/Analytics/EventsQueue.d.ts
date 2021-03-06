declare type EventItem = (checkoutAttemptId: string) => Promise<any>;
declare class EventsQueue {
    events: EventItem[];
    add(event: any): void;
    run(checkoutAttemptId?: string): Promise<any[]>;
}
export default EventsQueue;
