export interface Room {
  id: string,
  number: number,
  size: number,
  floor: number,
  occupied: boolean,
  hotelId: string,
  clientNames: [string]
}
