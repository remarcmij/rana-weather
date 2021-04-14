async function fetchData(url) {
  const res = await fetch(url);
  // if (!res.ok) {
  //   throw new Error(`HTTP error! status: ${res.status}`);
  // }
  const data = await res.json();
  if (res.status === 404) {
    throw data;
  }

  return data;
}

export default fetchData;
