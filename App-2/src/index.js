import Resolver from '@forge/resolver';
import api, { route } from '@forge/api';
const resolver = new Resolver();

resolver.define('fetchLabels', async (req) => {
  const key = req.context.extension.issue.key;

  const res = await api.asUser().requestJira(route`/rest/api/3/issue/${key}?fields=labels`);

  const data = await res.json();

  const label = data.fields.labels;
  if (label == undefined) {
    console.warn(`${key}: Failed to find labels`);
    return [];
  }

  return label;
});

resolver.define('getcontents',async ()=>{
  
  const url = 'https://5a65-103-109-144-44.ngrok-free.app/getcontent'

  const options = {
    
    method : 'GET'
  }

  const response = await fetch(url,options)

  const data = await response.json()

  console.log(data)

  return data
})

export const handler = resolver.getDefinitions();
