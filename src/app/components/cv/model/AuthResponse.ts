export class AuthResponse {
  constructor(
    public id:string,
    public ttl:string,
    public created:string,
    public userId:number
  )
  {  }
}
