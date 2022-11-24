const prefix = 'https://esi.evepc.163.com/latest/';
const surfix = '/?datasource=serenity&language=zh';

async function fetchESI(phin, query) {
  let res = await phin(prefix + query + surfix);
  if (res.statusCode == 200) {
    return JSON.parse(res.body);
  }
  console.log('ESI error:' + query, '/nResponse:' + res.body);
  return res.statusCode;
}

export async function getAlliances(phin) {
  return await fetchESI(phin, 'alliances');
}

export async function getAlliance(phin, id) {
  return await fetchESI(phin, 'alliance/' + id);
}

export async function getCorporations(phin, id) {
  return await fetchESI(phin, 'corporations');
}