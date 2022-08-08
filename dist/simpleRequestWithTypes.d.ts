interface APIResponse {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
declare const API_URL: string;
declare function getDataFromAPI(url: string): Promise<any>;
declare function fetchAndPrintData(url: string): Promise<void>;
