interface APIResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const API_URL: string = "https://jsonplaceholder.typicode.com/todos/";

async function getDataFromAPI(url: string): Promise<any> {
  const res: Response = await fetch(url);
  const parsedResponse: APIResponse = await res.json();
  return parsedResponse;
}

async function fetchAndPrintData(url: string) {
  for (let i: number = 1; i <= 5; i++) {
    const response: APIResponse = await getDataFromAPI(url + i);
    console.log(response)
  }
}

fetchAndPrintData(API_URL);
