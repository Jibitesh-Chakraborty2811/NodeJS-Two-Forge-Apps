import Resolver from '@forge/resolver';
import api, { route } from '@forge/api';
const resolver = new Resolver();



resolver.define('postdata',async ({payload})=>{
  console.log(payload.name)
  console.log(payload.description)

  const url = 'https://5a65-103-109-144-44.ngrok-free.app/addcontent'

  const body = {
    name : payload.name,
    description : payload.description
  }

  const options = {
    method : 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(body)
  }

  const response = await fetch(url, options);

  console.log(response)

  const data = await response.json()

  console.log(data)

  return data


});

export const handler = resolver.getDefinitions();
